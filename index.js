const express = require("express"); // express 가져오기
const app = express();

// 서버 실행
app.listen(8080, () => {
    console.log("server running")
})