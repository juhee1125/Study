import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: "c21e2b56c8947cc7401bddb4b1eb22bb",
  endpoint: process.env.MAILTRAP_ENDPOINT
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

  