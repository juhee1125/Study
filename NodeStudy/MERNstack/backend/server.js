const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const connect = require("./connect");
const posts = require("./postRoutes");
const users = require("./userRoutes");

const app = express();
const PORT = 3000;

// uploads 폴더 없으면 생성
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// multer 디스크 저장소 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// 미들웨어
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadDir)); // 이미지 정적 제공

+app.post("/images", upload.single("image"), (req, res) => {
  res.json({ imagePath: `/uploads/${req.file.filename}` });
});

// 라우터 등록
app.use(posts);
app.use(users);

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
