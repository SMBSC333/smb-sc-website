const GHL_API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = "9I2E3anKdouWToVMoJly";

const INDUSTRY_SLUG_MAP = {
  "Accounting": "accounting",
  "Architecture": "architecture",
  "Electrical": "electrical",
  "Engineering": "engineering",
  "HVAC": "hvac",
  "IT / MSPs": "it-msps",
  "Landscaping": "landscapers",
  "Law Firms": "law-firms",
  "Marketing Agencies": "marketing-agencies",
  "Pest Control": "pest-control",
  "Plumbing": "plumbing",
  "Property Management": "property-management",
  "Vascular Surgery Practices": "healthcare-vascular",
  "Bariatric & Surgical Practices": "surgical-bariatric",
  "B2B Professional Services": "b2b-professional-services"
};

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let firstName = "", lastName = "", email = "", industry = "", companyName = "", phone = "";

  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      firstName = body.firstName || body.first_name || "";
      lastName = body.lastName || body.last_name || "";
      email = body.email || "";
      industry = body.industry || "";
      companyName = body.companyName || body.company_name || body.company || "";
      phone = body.phone || "";
    } else {
      const formData = await req.formData();
      firstName = formData.get("firstName") || formData.get("first_name") || "";
      lastName = formData.get("lastName") || formData.get("last_name") || "";
      email = formData.get("email") || "";
      industry = formData.get("industry") || "";
      companyName = formData.get("companyName") || formData.get("company_name") || formData.get("company") || "";
      phone = formData.get("phone") || "";
    }
  } catch (e) {
    return new Response("Invalid request body", { status: 400 });
  }

  if (!email || !industry || !firstName || !lastName || !companyName) {
    return new Response("Missing required fields: firstName, lastName, email, companyName, and industry", { status: 400 });
  }

  const industrySlug = INDUSTRY_SLUG_MAP[industry] || industry.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  // IMPORTANT: use the slugified industry (matches GHL workflow trigger tags exactly),
  // not the raw display-name lowercase — those diverge for multi-word industries
  // (e.g. "IT / MSPs" -> "it-msps", "Landscaping" -> "landscapers", "Vascular Surgery Practices" -> "healthcare-vascular")
  // and previously caused nurture workflows to never fire for those industries.
  const industryTag = `industry: ${industrySlug}`;

  // Create GHL contact (fire-and-forget — never block the user redirect)
  try {
    if (GHL_API_KEY) {
      const payload = {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        email,
        companyName: companyName || undefined,
        phone: phone || undefined,
        locationId: LOCATION_ID,
        source: "AI Industry Report",
        tags: ["ai-industry-report", industryTag]
      };

      await fetch("https://rest.gohighlevel.com/v1/contacts/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    }
  } catch (err) {
    console.error("GHL contact creation failed:", err.message);
  }

  const nameParam = firstName ? `&name=${encodeURIComponent(firstName)}` : "";
  return new Response(null, {
    status: 303,
    headers: { Location: `/ai-report/thank-you?industry=${industrySlug}${nameParam}` }
  });
};
