import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP Configuration (Hostinger: smtp.hostinger.com, port 465)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SENDER_EMAIL = process.env.SENDER_EMAIL || '';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || '';
const SENDER_NAME = process.env.SENDER_NAME || 'GrowthOptics';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || SENDER_EMAIL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Phone required in production (publish/deploy), optional in development (test)
    const isProduction = process.env.NODE_ENV === 'production';
    const requiredFields = isProduction
      ? ['firstName', 'lastName', 'email', 'phone', 'message']
      : ['firstName', 'lastName', 'email', 'message'];
    const missing = requiredFields.filter((f) => !body[f]?.toString().trim());
    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone when provided (required format in production, optional in dev)
    if (phone && phone.toString().trim() !== '') {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(phone)) {
        return NextResponse.json(
          { error: 'Invalid phone format' },
          { status: 400 }
        );
      }
      const digitsOnly = phone.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        return NextResponse.json(
          { error: 'Phone number must contain between 7 and 15 digits' },
          { status: 400 }
        );
      }
    }

    // Ensure SMTP is configured
    if (!SENDER_EMAIL || !EMAIL_PASSWORD) {
      console.error('Missing SENDER_EMAIL or EMAIL_PASSWORD in .env');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SENDER_EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

    // Email content (phone may be empty when optional in dev)
    const phoneDisplay = phone && String(phone).trim() ? String(phone).trim() : 'Not provided';
    const mailOptions = {
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #7c6cff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f7ff; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phoneDisplay === 'Not provided' ? 'Not provided' : `<a href="tel:${phoneDisplay}">${phoneDisplay}</a>`}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            This email was sent from the GrowthOptics contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneDisplay}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
