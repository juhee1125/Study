import './App.css'
// React Router는 URL 변경을 감지하고 컴포넌트를 바꿔주는 역할
// 한개의 HTML파일 안에서 화면만 바뀌기 때문에 다른 페이지처럼 보이게 하려면 Router 필요
import { HashRouter as Router, Routes, Route} from "react-router-dom"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { CreateBlog } from "./pages/CreateBlog"
import { Home } from "./pages/Home"
import { Landing } from "./pages/Landing"
import Profile from "./pages/Profile"
import { ReadBlog } from "./pages/ReadBlog"
import { Layout } from './components/Layout'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  useEffect(()=>{
    let token = sessionStorage.getItem("User")
    if(token){
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
  },[])
  return (
    <Router>
      <Routes>       
        <Route path='/' element={<Landing/>}/>
        <Route element={<Layout/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/createblog' element={<CreateBlog/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/readblog/:id' element={<ReadBlog/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
