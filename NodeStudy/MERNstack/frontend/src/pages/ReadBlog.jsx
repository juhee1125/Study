import { getPost } from "../api"
//useParams : URL에서 :id, :slug 등 파라미터를 가져오는 데 사용
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export function ReadBlog() {
  const [post, setPost] = useState([])

  let params = useParams()
  const navigate = useNavigate()
  let id = params.id

  useEffect(()=>{
    async function loadPost() {
      let data = await getPost(id)
      let date = new Date(data.dateCreated)
      data.dateCreated = date.toString()
      setPost(data)
    }
    loadPost()
  })

  return (
    <>
      <button onClick={()=>navigate(-1)}>Back</button>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>{post.dateCreated?.slice(4,15)}</h3>
      <p>{post.content}</p>
    </>
  )
}
