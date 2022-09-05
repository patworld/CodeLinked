import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/SideBar";
import "./home.css";
import axios from "axios";


export default function Homepage() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search);
     setPosts(res.data)
    //  console.log(res)
    }
    
    fetchPosts()
  },[search])
  
  return (
    <>
      <Header />
      <div className="home" key ="unik">
        <Posts posts = {posts} />
        <Sidebar />
      </div>
    </>
  );
}