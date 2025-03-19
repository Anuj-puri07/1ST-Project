import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SInglePage from './pages/SInglePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/nav' element={<Nav />} />
      <Route path='/' element={<Home />} />
      <Route path='/single-page' element={<SInglePage /> } />
      <Route path='/create-page' element={<CreatePage />} />
      <Route path='/edit-page' element={<EditPage />} />
        </Routes>
        </BrowserRouter>
  )
}

export default App
