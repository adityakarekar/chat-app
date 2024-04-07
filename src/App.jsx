
import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Chat from './Pages/Chat'
import Home from './Pages/Home'

function App() {
  return (
    <div className="ImageBackGround">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/chats" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
