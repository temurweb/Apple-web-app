import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'
import Store from './pages/Store/Store'
import Iphone from './pages/Iphone/Iphone'
import Airpods from './pages/Airpods/Airpods'
import Iphone17pro from './pages/Iphone/models/Iphone17Pro/Iphone17pro'

export default function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/explore' element={<Explore/>}/>
    <Route path='/iphone' element={<Iphone/>}/>
    <Route path='/iphone/17pro' element={<Iphone17pro/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/airpods' element={<Airpods/>}/>
   </Routes>
   <Footer/>
   </>
  )
}
