const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, countryName, subject, message } = req.body;

    if ( !firstName, !lastName,!email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Email, subject, and message are required",
      });
    }

    const newContact = await Contact.create({
      firstName: firstName?.trim() || "N/A",
      lastName: lastName?.trim() || "N/A",
      email: email.trim(),
      phone: phone?.trim() || "N/A",
      countryName: countryName || "Unknown",
      subject: subject.trim(),
      message: message.trim(),
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,                
        pass: process.env.EMAIL_APP_PASSWORD,     
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,       
      replyTo: email,
      subject: `New Contact: ${subject}`,
      text: `
Name: ${firstName || ""} ${lastName || ""}
Email: ${email}
Phone: ${phone || "N/A"}
Country: ${countryName || "Unknown"}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Country:</strong> ${countryName || "Unknown"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(" Contact route error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server error - please try again later",
    });
  }
});

module.exports = router;
