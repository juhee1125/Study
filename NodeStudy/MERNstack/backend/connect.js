
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({path: "./config.env"})

// MongoDB 클라이언트 인스턴스 생성
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// MongoDB 호출
let database
// 모듈(파일)을 외부로 내보낼 때 사용하는 문법. 즉, 다른파일에서 DB를 호출해야하기 때문에 사용
module.exports = {
    // MongoDB에 연결하고 사용할 DB 지정
    connectToServer: () => {
        database = client.db("blogData")
        console.log("db연결")
    },
    // 연결된 DB 객체를 가져옴
    getDb: () => {
        return database
    }
}

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
