import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form({hehe,text}) {
  let navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [description, setDescription] = useState("")

async function createBlog(e){
  e.preventDefault()
  let response = await axios.post("https://67dba8e91fd9e43fe4755105.mockapi.io/blogs/",{
    title,
    subtitle,
    thumbnail,
    description
  })
  if(response.status==201){
    navigate("/")
  }else{
    console.log("something went wrong")
  }
}

  return (
<>
<div className="flex items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
    {/* Logo and Heading */}
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-blue-600 flex items-center justify-center">
        <span className="mr-1 text-3xl font-bold">ES</span>
        BAZAR
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Best online ecommerce website for you
      </p>
    </div>
    {/* Divider */}
    <div className="my-6 border-t border-gray-300 relative">
      <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
       {text}
      </span>
    </div>
    {/* Form */}
    <form onSubmit={createBlog} className="space-y-4">
      {/* Full Name */}
      <div>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Full title..." className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      {/* Mobile Number */}
      <div>
        <input type="text" onChange={(e)=>setSubtitle(e.target.value)} placeholder="Enter subtitle..." className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      {/* Email */}
      <div>
        <input type="text" onChange={(e)=>setThumbnail(e.target.value)} placeholder="Thumbnail url...." className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      {/* Password */}
      <div className="relative">
        <textarea onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Description" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
        
      </div>
     
      {/* Submit Button */}
      <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition">
        {hehe}
      </button>
    </form>
    {/* Footer */}
    
  </div>
</div></>  )
}

export default Form