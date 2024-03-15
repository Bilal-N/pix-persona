import { ContactUs } from "../../components/email-templates/ContactUs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, contactNumber } = body;
  try {
    const data = await resend.emails.send({
      from: "Pixel Persona <info@pixelpersona.co>",
      to: ["info@pixelpersona.co"],
      subject: "Contact Information",
      react: ContactUs({ name, email, contactNumber }),
    });

    return Response.json({ name, email, contactNumber });
  } catch (error) {
    return Response.json({ error });
  }
}
