import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SENDER_EMAIL = process.env.SENDER_EMAIL || '';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || '';
const SENDER_NAME = process.env.SENDER_NAME || 'GrowthOptics';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || SENDER_EMAIL;

/**
 * GET /api/contact/test
 * Sends a test email. Only works when ENABLE_EMAIL_TEST=true in .env.
 * Disable in production to prevent abuse.
 */
export async function GET() {
  if (process.env.ENABLE_EMAIL_TEST !== 'true') {
    return NextResponse.json(
      { error: 'Email test is disabled. Set ENABLE_EMAIL_TEST=true in .env to test.' },
      { status: 403 }
    );
  }

  if (!SENDER_EMAIL || !EMAIL_PASSWORD) {
    return NextResponse.json(
      { error: 'Missing SENDER_EMAIL or EMAIL_PASSWORD in .env' },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SENDER_EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject: 'GrowthOptics – Email test successful',
      text: 'This is a test email from your GrowthOptics contact form. Hostinger SMTP is working.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Email test successful</h2>
          <p>This is a test email from your GrowthOptics contact form.</p>
          <p><strong>Hostinger SMTP is working.</strong></p>
          <p style="color: #64748b; font-size: 12px;">Sent at ${new Date().toISOString()}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully. Check the inbox for ' + RECIPIENT_EMAIL,
    });
  } catch (error) {
    console.error('Test email error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send test email', details: message },
      { status: 500 }
    );
  }
}
