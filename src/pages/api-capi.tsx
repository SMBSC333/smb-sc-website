import { Hono } from 'hono'

const apiCapi = new Hono()

/**
 * POST /api/capi
 * Server-side Meta Conversions API (CAPI) endpoint.
 * Accepts event data from the browser and forwards to Meta CAPI.
 * Runs as a Netlify Edge Function so it has access to real client IP.
 *
 * Body: { event_name, event_source_url, fbc?, fbp?, em?, ph?, fn?, ln? }
 */
apiCapi.post('/', async (c) => {
  const accessToken = c.env?.META_CAPI_TOKEN
  const pixelId = '727020719747724'

  if (!accessToken) {
    return c.json({ error: 'CAPI not configured' }, 503)
  }

  let body: Record<string, string>
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400)
  }

  const {
    event_name,
    event_source_url,
    fbc,
    fbp,
    em,    // hashed email
    ph,    // hashed phone
    fn,    // hashed first name
    ln,    // hashed last name
    event_id,
  } = body

  if (!event_name || !event_source_url) {
    return c.json({ error: 'event_name and event_source_url required' }, 400)
  }

  // Build user_data — Meta requires at minimum client_ip_address + client_user_agent
  const clientIp = c.req.header('x-forwarded-for')?.split(',')[0]?.trim()
    || c.req.header('x-nf-client-connection-ip')
    || c.req.header('x-real-ip')
    || ''
  const userAgent = c.req.header('user-agent') || ''

  const userData: Record<string, string> = {
    client_ip_address: clientIp,
    client_user_agent: userAgent,
  }
  if (fbc) userData.fbc = fbc
  if (fbp) userData.fbp = fbp
  if (em) userData.em = em
  if (ph) userData.ph = ph
  if (fn) userData.fn = fn
  if (ln) userData.ln = ln

  const eventPayload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url,
        action_source: 'website',
        event_id: event_id || `${event_name}_${Date.now()}`,
        user_data: userData,
      },
    ],
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventPayload),
      }
    )
    const result = await res.json() as Record<string, unknown>

    if (!res.ok) {
      console.error('[CAPI] Meta API error:', result)
      return c.json({ error: 'Meta API error', detail: result }, 502)
    }

    return c.json({ ok: true, events_received: result.events_received ?? 1 })
  } catch (err) {
    console.error('[CAPI] Fetch error:', err)
    return c.json({ error: 'Failed to send to Meta CAPI' }, 500)
  }
})

export default apiCapi
