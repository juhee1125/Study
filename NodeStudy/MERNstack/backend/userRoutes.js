const express = require("express")
const database = require("./connect")
// mongoDB 쿼리에서 인식하도록 objectId 형식으로 변환(url(브라우저나 api요청)에서 string으로 들어가기 때문에 변환 필요)
const ObjectId = require("mongodb").ObjectId
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})

// 라우터 생성
let userRoutes = express.Router()
const SALT_ROUNDS = 6

// 게시글 조회
userRoutes.route("/users").get(async(req, res)=>{
    let db = database.getDb()
    // mongoDB에서 특정 컬랙션(테이블) 호출
    // collection()에서 제공하는 함수로, find, findOne, insertOne 등이 있음
    // find({}) 는 select*from users 와 동일한 개념
    let data = await db.collection("users").find({}).toArray()
    if(data.length >0){
        res.json(data)
    }else{
        throw new Error("Data was not found :(")
    }
})

// 해당 ID의 게시글 조회
userRoutes.route("/users/:id").get(async(req, res)=>{
    let db = database.getDb()
    // mongoDB는 고유번호로 _id 생성하므로 id를 호출하려면 '_id' 형식으로 작성해야 함
    // ObjectId는 객체타입
    let data = await db.collection("users").findOne({_id: new ObjectId(req.params.id)})
    // 빈 객체인지 확인
    if(Object.keys(data).length >0){
        res.json(data)
    }else{
        throw new Error("Data was not found :(")
    }
})

// 게시글 생성
userRoutes.route("/users").post(async(req, res)=>{
    let db = database.getDb()

    const takenEmail = await db.collection("users").findOne({email: req.body.email})
    if (takenEmail){
        res.json({message: "The email is taken"})
    }else{
        const hash = await bcrypt.hash(req.body.password, SALT_ROUNDS)

        let mongoObject = {
            name:req.body.name,
            email:req.body.email,
            password:hash,
            joinDate:new Date(),
            posts:[]
        }
        let data = await db.collection("users").insertOne(mongoObject)
        res.json(data)
    }
})

// 게시글 수정
userRoutes.route("/users/:id").put(async(req, res)=>{
    let db = database.getDb()
    // $set는 mongoDB의 업데이트 연산자로, 전달한 값은 덮어쓰고 없는 필드일 경우 새로추가
    let mongoObject = {
        $set: {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            joinDate:req.body.joinDate,
            posts:req.body.posts
        }   
    }
    // updateOne(어떤 문서를 업데이트할지, 어떻게 업데이트할지)
    let data = await db.collection("users").updateOne({_id: new ObjectId(req.params.id)}, mongoObject)
    res.json(data)
})

// 게시글 삭제
userRoutes.route("/users/:id").delete(async(req, res)=>{
    let db = database.getDb()
    let data = await db.collection("users").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)
})

// 로그인
userRoutes.route("/users/login").post(async(req, res)=>{
    let db = database.getDb()

    const user = await db.collection("users").findOne({email: req.body.email})

    if(user){
        let confirmation = await bcrypt.compare(req.body.password, user.password)
        if(confirmation){
            const token = jwt.sign(user, process.env.SECRETKEY, {expiresIn: "1h"})
            res.json({success: true, token})
        }else{
            res.json({success: false, message: "Incorrect Password"})
        }
    }else{
        res.json({success: false, message: "User not found"})
    }
 
})

module.exports = userRoutes