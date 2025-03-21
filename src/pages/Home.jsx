import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Card from '../components/Card'
import axios from 'axios'

function Home() {

  const [blogs,setBlogs]= useState([])
  
  async function fetchBlog(){
    let response= await axios.get("https://67dba8e91fd9e43fe4755105.mockapi.io/blogs")
    if(response.status == 200){
      setBlogs(response.data)
      // console.log(response.data)
    }else{
      console.log("Something went wrong!!!!")
    }
  }
    // hooks
useEffect(()=>{
  fetchBlog()
}, [])

  return (
   <>
  <Nav />

  <div  className='flex flex-wrap gap-10 mt-4 justify-evenly'>
    {
      blogs.map(function(blog){
        // console.log(blog,"This is blog inside map")
        return(
          <Card key={blog.id} haha={blog}/>
        )
      })
    }
  </div>

  <Footer />
   </>
  )
}

export default Home