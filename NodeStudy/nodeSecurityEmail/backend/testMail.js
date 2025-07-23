import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// SMTP 설정
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// 테스트 메일 전송
const sendTestMail = async () => {
  try {
    const info = await transporter.sendMail({
      from: '"Test Dev 👨‍💻" <dev@example.com>',
      to: "test@inbox.mailtrap.io", // Mailtrap Inbox에서 수신 확인 가능
      subject: "✅ Mailtrap SMTP 테스트 메일",
      text: "이건 Mailtrap SMTP로 보내는 텍스트 메일입니다!",
      html: "<h1>이건 HTML 형식의 메일입니다!</h1><p>테스트 성공 🎉</p>",
    });

    console.log("📨 메일 전송 성공:", info.messageId);
  } catch (error) {
    console.error("❌ 메일 전송 실패:", error);
  }
};

sendTestMail();
