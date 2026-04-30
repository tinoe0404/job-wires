import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const subjectMap: Record<string, string> = {
      quote: "Request a Quote",
      product: "Product Inquiry",
      support: "Technical Support",
      other: "Other",
    };

    // Email to Joshwires (notification of new enquiry)
    const ownerEmailPromise = transporter.sendMail({
      from: `"Joshwires Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || "info@joshwires.co.zw, joshuamabunu@icloud.com",
      replyTo: email,
      subject: `New Enquiry: ${subjectMap[subject] || subject} — from ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px;">
          <div style="background: #0f172a; padding: 24px 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Website Enquiry</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${subjectMap[subject] || subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Message</p>
              <p style="color: #0f172a; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to the client acting as confirmation receipt
    const customerEmailPromise = transporter.sendMail({
      from: `"Joshwires" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Joshwires - We've received your message!",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px;">
          <div style="background: #0f172a; padding: 24px 32px; border-radius: 16px 16px 0 0; text-align: center;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0;">Thank You, ${name}!</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
            <p style="color: #0f172a; font-size: 15px; line-height: 1.8; margin: 0 0 16px 0;">
              We have successfully received your enquiry and our team will get back to you within <strong>24 hours</strong>.
            </p>

            <div style="margin: 24px 0; padding: 20px; background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 12px 0;">For your records, here is a copy of your message:</p>
              <p style="color: #334155; font-size: 14px; margin: 0 0 4px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p style="color: #334155; font-size: 14px; margin: 0 0 4px 0;"><strong>Subject:</strong> ${subjectMap[subject] || subject}</p>
              <p style="color: #334155; font-size: 14px; margin: 12px 0 4px 0; white-space: pre-wrap;"><strong>Message:</strong><br/>${message}</p>
            </div>

            <p style="color: #64748b; font-size: 14px; line-height: 1.7; margin: 0 0 24px 0;">
              In the meantime, feel free to reach us directly on WhatsApp for a faster response:
            </p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://wa.me/263779975775" style="display: inline-block; background: #25D366; color: #ffffff; padding: 12px 28px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Chat on WhatsApp
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
            <p style="color: #94a3b8; font-size: 12px; text-align: center; margin: 0;">
              Joshwires — 434 Miles Road Industrial Side, Victoria Falls, Zimbabwe
            </p>
          </div>
        </div>
      `,
    });

    await Promise.all([ownerEmailPromise, customerEmailPromise]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
