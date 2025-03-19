import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Card from '../components/Card'

function Home() {
  return (
   <>
  <Nav />

  <div  className='flex flex-wrap justify-evenly'>
  <Card />
  <Card />
  <Card />
  </div>

  <Footer />
   </>
  )
}

export default Home