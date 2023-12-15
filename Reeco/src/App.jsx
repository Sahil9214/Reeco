import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Order from './Components/Order'
import DetailOrder from './Components/DetailOrder'
import MainData from './Components/MainData'

function App() {
  

  return (
    <>
      <Navbar/>
      <Order/>
      <br/>
      <br/>
      <DetailOrder/>
      <br/>
      <br/>
      <MainData/>
       
    </>
  )
}

export default App
