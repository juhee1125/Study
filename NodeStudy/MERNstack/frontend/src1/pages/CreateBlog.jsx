import { useState, useRef } from "react"
import { createPost } from "../api"

export function CreateBlog() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState()

  const MAX_FILE_SIZE =  15000000
  
  const inputFile = useRef(null)

  async function handleSubmit(){
  let submitObject = {
    title: title,
    description: description,
    content: content,
    author: null,
    dateCreated: new Date(),
    file: file
  }
  await createPost(submitObject)
}

  function handleFileUpload(e) {
    const file = e.target.files[0]
    const fileExtension = file.name.substring(file.name.lastIndexOf("."))
    if (fileExtension != ".jpg" && fileExtension != ".jpeg" && fileExtension != ".png") {
        alert("Files must be jpg or png")
        inputFile.current.value = ""
        inputFile.current.type = "file"
        return
    }
    if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the limit (15 Mb)")
        inputFile.current.value = ""
        inputFile.current.type = "file"
        return
    }

    setFile(file)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Blog Post Title: </label>
      <input onChange={(e)=>setTitle(e.target.value)} maxLength={100} required name="title" />
      <label>Blog Description: </label>
      <input onChange={(e)=>setDescription(e.target.value)} maxLength={200} required name="description" />
      <label>Blog Content: </label>
      <textarea onChange={(e)=>setContent(e.target.value)} maxLength={5000} required name="content" />
      <label className="flex left-0 p-2">Insert Header Image: </label>
      <input type="file" onChange={handleFileUpload} ref={inputFile} className="cursor-pointer hover:bg-accent" required/>
      <button type="submit">Submit</button>
    </form>
  )
}