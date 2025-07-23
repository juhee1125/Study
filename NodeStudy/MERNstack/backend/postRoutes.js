const express = require("express")
const database = require("./connect")
// mongoDB 쿼리에서 인식하도록 objectId 형식으로 변환(url(브라우저나 api요청)에서 string으로 들어가기 때문에 변환 필요)
const ObjectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})

// 라우터 생성
let postRoutes = express.Router()

// 게시글 조회
postRoutes.route("/posts").get(verifyToken, async(req, res)=>{
    let db = database.getDb()
    // mongoDB에서 특정 컬랙션(테이블) 호출
    // collection()에서 제공하는 함수로, find, findOne, insertOne 등이 있음
    // find({}) 는 select*from posts 와 동일한 개념
    let data = await db.collection("posts").find({}).toArray()
    if(data.length >0){
        res.json(data)
    }else{
        throw new Error("Data was not found :(")
    }
})

// 해당 ID의 게시글 조회
postRoutes.route("/posts/:id").get(verifyToken, async(req, res)=>{
    let db = database.getDb()
    // mongoDB는 고유번호로 _id 생성하므로 id를 호출하려면 '_id' 형식으로 작성해야 함
    // ObjectId는 객체타입
    let data = await db.collection("posts").findOne({_id: new ObjectId(req.params.id)})
    // 빈 객체인지 확인
    if(Object.keys(data).length >0){
        res.json(data)
    }else{
        throw new Error("Data was not found :(")
    }
})

// 게시글 생성
postRoutes.route("/posts").post(verifyToken, async(req, res)=>{
    let db = database.getDb()
    let mongoObject = {
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        author:req.body.author,
        dateCreated:req.body.dateCreated
    }
    let data = await db.collection("posts").insertOne(mongoObject)
    res.json(data)
})

// 게시글 수정
postRoutes.route("/posts/:id").put(verifyToken, async(req, res)=>{
    let db = database.getDb()
    // $set는 mongoDB의 업데이트 연산자로, 전달한 값은 덮어쓰고 없는 필드일 경우 새로추가
    let mongoObject = {
        $set: {
            title:req.body.title,
            description:req.body.description,
            content:req.body.content,
            author:req.body.author,
            dateCreated:req.body.dateCreated
        }    
    }
    // updateOne(어떤 문서를 업데이트할지, 어떻게 업데이트할지)
    let data = await db.collection("posts").updateOne({_id: new ObjectId(req.params.id)}, mongoObject)
    res.json(data)
})

// 게시글 삭제
postRoutes.route("/posts/:id").delete(verifyToken, async(req, res)=>{
    let db = database.getDb()
    let data = await db.collection("posts").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)
})

function verifyToken(req,res,next){
    const authHeaders = req.headers["authorization"]
    const token = authHeaders && authHeaders.split(' ')[1]
    
    if(!token){
        return res.status(401).json({message: "Authorization token is missing"})
    }

    jwt.verify(token, process.env.SECRETKEY, (error, user)=>{
        if(error){
            return res.status(403).json({message: "Invalid Token"})
        }
        req.user = user
        next()
    })
}

module.exports = postRoutes