import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function SInglePage() {
  const [blog, setBlog]= useState ({})
  const data = useParams ()
  const id = data.id
  let navigate= useNavigate()
  async function fetchBlog(){
   let response= await axios.get("https://67dba8e91fd9e43fe4755105.mockapi.io/blogs/"+ id)
   if(response.status==200){
    setBlog(response.data)
   }else{
    console.log("Something went wrong")
   }
  }
  useEffect(function(){
    fetchBlog()
  },[])
  console.log(blog)
// Delete section
  async function deleteBlog(){
    let response = await axios.delete("https://67dba8e91fd9e43fe4755105.mockapi.io/blogs/"+ id)
    if(response.status==200){
      navigate("/")
    }else{
      console.log("Something went wrong")
    }

  }
  return (
  <>
  <Nav/>
  <div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src={blog.thumbnail} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button onClick={deleteBlog} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Delete</button>
          </div>
          <div className="w-1/2 px-2">
            <Link to='/edit-page'><button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Edit</button> </Link>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {blog.description}
        </p>
       
        
      </div>
    </div>
  </div>
</div>
<Footer />

  </>
  )
}

export default SInglePage