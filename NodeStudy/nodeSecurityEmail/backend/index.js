import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import router from "./routes/auth.route.js"; // 라우터 연결

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectDB(); // DB 연결
app.use(express.json()); // ✅ req.body 파싱
app.use(cookieParser()); // JWT 토큰용

app.use("/api/auth", router); // 경로에 맞게 등록

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
