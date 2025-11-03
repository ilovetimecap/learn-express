const express = require("express"); // express 가져오기
const dotenv = require("dotenv");

const app = express();

//환경변수 로드
 dotenv.config()

// 서버 실행
app.listen(8080, () => {
    console.log("server running",
    process.env.PORT)
})