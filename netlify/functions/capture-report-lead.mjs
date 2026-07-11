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
  "Property Management": "property-management"
};

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let firstName = "", email = "", industry = "";

  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      firstName = body.firstName || body.first_name || "";
      email = body.email || "";
      industry = body.industry || "";
    } else {
      const formData = await req.formData();
      firstName = formData.get("firstName") || formData.get("first_name") || "";
      email = formData.get("email") || "";
      industry = formData.get("industry") || "";
    }
  } catch (e) {
    return new Response("Invalid request body", { status: 400 });
  }

  if (!email || !industry) {
    return new Response("Missing required fields: email and industry", { status: 400 });
  }

  const industrySlug = INDUSTRY_SLUG_MAP[industry] || industry.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const industryTag = `industry: ${industry.toLowerCase()}`;

  // Create GHL contact (fire-and-forget — never block the user redirect)
  try {
    if (GHL_API_KEY) {
      const payload = {
        firstName: firstName || undefined,
        email,
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
