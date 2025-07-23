const Nodemailer = require("nodemailer");
const { MailtrapTransport } = require("mailtrap");

const TOKEN = "eee87a496b5c20c4d2d2db0b51455999";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
    testInboxId: 3589373,
  })
);

const sender = {
  address: "hello@example.com",
  name: "Mailtrap Test",
};
const recipients = [
  "mjuhee1125@gmail.com",
];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
    sandbox: true
  })
  .then(console.log, console.error);