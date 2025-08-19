// POST route to handle prescription uploads with files
app.post(
  "/upload-prescription",
  upload.array("prescriptions"),
  async (req, res) => {
    const { name, address, phone, email } = req.body;
    if (!name || !address || !phone || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ error: "At least one prescription file is required." });
    }
    // Confirmation email to user
    const userMailOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Thank you for your prescription submission!",
      html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 500px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
        <div style="text-align: center;">
          <h2 style="color: #2d7ff9; margin-bottom: 4px;">Thank You, ${name}!</h2>
          <div style="color: #555; font-size: 1em; margin-bottom: 18px;">We've received your prescription and details.</div>
        </div>
        <div style="margin-top: 24px; color: #222; font-size: 1.08em;">
          <p>Dear ${name},</p>
          <p>Thank you for submitting your prescription to Remedius Mobile Health! Our pharmacist will review your prescription and contact you for delivery.</p>
          <p>We typically respond within 24 hours during business days. For urgent medical matters, please contact our emergency hotline <strong style="color:#2d7ff9;">+256 760 207 718</strong>.</p>
        </div>
        <div style="margin-top: 32px; color: #555; text-align: left;">
          Best regards,<br>
          <strong>The Remedius Health Team</strong>
        </div>
        <div style="margin-top: 32px; text-align: center; color: #888; font-size: 0.98em;">
          <a href="https://www.remediushealth.africa" style="color: #2d7ff9; text-decoration: none;">www.remediushealth.africa</a>
          &nbsp;|&nbsp;
          <a href="mailto:info@remediushealth.africa" style="color: #2d7ff9; text-decoration: none;">info@remediushealth.africa</a>
        </div>
      </div>
    `,
    };
    // Admin email with prescription attachments
    const adminMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Prescription Submission Received!",
      html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #e6f7ff; padding: 32px; border-radius: 12px; max-width: 700px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
        <h2 style="color: #1890ff; text-align: center;">New Prescription Submission</h2>
        <table style="width: 100%; margin-top: 24px; font-size: 1.05em;">
          <tr><td style="font-weight: bold; color: #333;">Name:</td><td>${name}</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Email:</td><td>${email}</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Phone:</td><td>${phone}</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Address:</td><td>${address}</td></tr>
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #555; text-align: center;">Prescription files are attached.</p>
      </div>
    `,
      attachments: req.files.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
      })),
    };
    try {
      await transporter.sendMail(userMailOptions);
      await transporter.sendMail(adminMailOptions);
      res.status(200).json({ message: "Prescription submitted successfully." });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send emails." });
    }
  }
);
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "https://remediusmobilehealth.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SMTP transporter setup (example: Gmail)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST route to handle form submissions
// POST route to handle /send-email for frontend compatibility
app.post("/send-email", upload.array("prescriptions"), async (req, res) => {
  // Accept extended bootcamp form fields
  const {
    fullName,
    email,
    phone,
    countryCity,
    profession,
    organization,
    areaOfInterest,
    experience,
    experienceDescription,
    motivation,
    referralSource,
    contactAgreement,
    message, // fallback for legacy
    name,
    address,
  } = req.body;

  // Accept legacy or new form
  const finalName =
    fullName ||
    name ||
    (req.body.firstName && req.body.lastName
      ? `${req.body.firstName} ${req.body.lastName}`
      : undefined);
  if (!finalName || !email || (!motivation && !message && !address)) {
    return res.status(400).json({ error: "Required fields missing." });
  }

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: "Thank you for your submission!",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 500px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
        <div style="text-align: center;">
          <h2 style="color: #2d7ff9; margin-bottom: 4px;">Thank You, ${finalName}!</h2>
          <div style="color: #555; font-size: 1em; margin-bottom: 18px;">We've received your prescription and details.</div>
        </div>
        <div style="margin-top: 24px; color: #222; font-size: 1.08em;">
          <p>Dear ${finalName},</p>
          <p>Thank you for submitting your prescription to Remedius Mobile Health! Our pharmacist will review your prescription and contact you for delivery.</p>
          <p>We typically respond within 24 hours during business days. For urgent medical matters, please contact our emergency hotline <strong style="color:#2d7ff9;">+256 760 207 718</strong>.</p>
        </div>
        <div style="margin-top: 32px; color: #555; text-align: left;">
          Best regards,<br>
          <strong>The Remedius Health Team</strong>
        </div>
        <div style="margin-top: 32px; text-align: center; color: #888; font-size: 0.98em;">
          <a href="https://www.remediushealth.africa" style="color: #2d7ff9; text-decoration: none;">www.remediushealth.africa</a>
          &nbsp;|&nbsp;
          <a href="mailto:info@remediushealth.africa" style="color: #2d7ff9; text-decoration: none;">info@remediushealth.africa</a>
        </div>
      </div>
    `,
  };

  // Detect form type: bootcamp (detailed) or contact (simple)
  // If prescription files are uploaded, send as attachments
  let adminMailOptions;
  if (req.files && req.files.length > 0) {
    adminMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Prescription Submission Received!",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #e6f7ff; padding: 32px; border-radius: 12px; max-width: 700px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
          <h2 style="color: #1890ff; text-align: center;">New Prescription Submission</h2>
          <table style="width: 100%; margin-top: 24px; font-size: 1.05em;">
            <tr><td style="font-weight: bold; color: #333;">Name:</td><td>${finalName}</td></tr>
            <tr><td style="font-weight: bold; color: #333;">Email:</td><td>${email}</td></tr>
            <tr><td style="font-weight: bold; color: #333;">Phone:</td><td>${
              phone || "N/A"
            }</td></tr>
            <tr><td style="font-weight: bold; color: #333;">Address:</td><td>${
              address || "N/A"
            }</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #555; text-align: center;">Prescription files are attached.</p>
        </div>
      `,
      attachments: req.files.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
      })),
    };
  } else {
    // fallback to legacy form
    adminMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission Received!",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #e6f7ff; padding: 32px; border-radius: 12px; max-width: 500px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
          <h2 style="color: #1890ff; text-align: center;">New Contact Message</h2>
          <table style="width: 100%; margin-top: 24px; font-size: 1.05em;">
            <tr><td style="font-weight: bold; color: #333;">Name:</td><td>${finalName}</td></tr>
            <tr><td style="font-weight: bold; color: #333;">Email:</td><td>${email}</td></tr>
            <tr><td style="font-weight: bold; color: #333;">Phone:</td><td>${
              phone || "N/A"
            }</td></tr>
            <tr><td style="font-weight: bold; color: #333;">Message:</td><td>${
              message || "N/A"
            }</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #555; text-align: center;">Reply to this email to respond to the sender.</p>
        </div>
      `,
    };
  }

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).json({ message: "Form submitted successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send emails." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// POST route to handle /send-email for frontend compatibility
app.post("/submit-form", async (req, res) => {
  // Accept extended bootcamp form fields
  const {
    fullName,
    email,
    phone,
    countryCity,
    profession,
    organization,
    areaOfInterest,
    experience,
    experienceDescription,
    motivation,
    referralSource,
    contactAgreement,
    message, // fallback for legacy
  } = req.body;

  // Accept legacy or new form
  const name =
    fullName ||
    req.body.name ||
    (req.body.firstName && req.body.lastName
      ? `${req.body.firstName} ${req.body.lastName}`
      : undefined);
  if (!name || !email || !(motivation || message)) {
    return res.status(400).json({ error: "Required fields missing." });
  }

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: "Thank you for your submission!",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 500px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
        <div style="text-align: center;">
          <img src='https://img.icons8.com/color/96/000000/checked--v1.png' alt='Success' style='margin-bottom: 16px;' />
          <h2 style="color: #2d7ff9; margin-bottom: 8px;">Thank You, ${name}!</h2>
          <p style="font-size: 1.1em; color: #333;">We appreciate you reaching out to us. Your submission has been received and our team will get back to you soon.</p>
        </div>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #555; text-align: center;">Best regards,<br><strong>The Remedius Team</strong></p>
      </div>
    `,
  };

  // Notification email to admin with all fields
  const adminMailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Bootcamp Form Submission Received!",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #fffbe6; padding: 32px; border-radius: 12px; max-width: 700px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
        <h2 style="color: #e6b800; text-align: center;">New Bootcamp Submission</h2>
        <table style="width: 100%; margin-top: 24px; font-size: 1.05em;">
          <tr><td style="font-weight: bold; color: #333;">Full Name:</td><td>${name}</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Email:</td><td>${email}</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Phone:</td><td>${
            phone || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Country & City:</td><td>${
            countryCity || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Profession:</td><td>${
            profession || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Organization:</td><td>${
            organization || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Area of Interest:</td><td>${
            Array.isArray(areaOfInterest)
              ? areaOfInterest.join(", ")
              : areaOfInterest || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Experience:</td><td>${
            experience || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Experience Description:</td><td>${
            experienceDescription || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Motivation:</td><td>${
            motivation || message || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Referral Source:</td><td>${
            referralSource || "N/A"
          }</td></tr>
          <tr><td style="font-weight: bold; color: #333;">Contact Agreement:</td><td>${
            contactAgreement ? "Agreed" : "Not agreed"
          }</td></tr>
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #555; text-align: center;">Check the dashboard for more details.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).json({ message: "Form submitted successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send emails." });
  }
});
