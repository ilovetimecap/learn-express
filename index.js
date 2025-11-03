const express = require("express"); // express 가져오기
const dotenv = require("dotenv");
const cors = require("cors");
const {users} = require("./data.js")

const app = express();

// cors 에러처리
app.use(cors()) // 모든 도메인 요청 허용

// JSON을 파싱하여 백엔드 코드에서 사용가능하게 설정
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


//환경변수 로드
 dotenv.config()

 // CRUD

 app.get("/", (req, res) => {
    res.json({ message: "후츠릿 짱!!"})
 })

 // GET - 모든 데이터 조회
 app.get("/users", (req, res) => {
    // 모드 사용자 데이터 조회
    res.json({ data : users})
 })

 // GET - 특정 데이터 조회
 app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const findItem = users.find((item) => item.id === Number(id)) //객체  or undefined return

    if (findItem) {
        // 매칭되는 사용자가 있는 경우
        res.json({data: findItem});
    } else {
        // 매칭되는 사용자가 없는 경우
        res.json({message: "사용자를 찾을 수 없습니다"});    
        
    }
 })

// POST - 데이터 추가

//requestData
// requestData = {
//         name: "",
//         mbti: ""
//     }
// }

app.post("/users", (req, res) => {
    const userInfo = req.body;
    console.log(`name: ${userInfo.name},
    mbti: ${userInfo.mbti}`);

    const newUser = {
      id: users.length + 1,
      name: userInfo.name,
      mbti: userInfo.mbti  
    }

    res.status(200).json({data: [...users, newUser] })

})





// 서버 실행
app.listen(8080, () => {
    console.log("server running", process.env.PORT)
    console.log("코드수정")
})