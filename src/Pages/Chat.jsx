import React from 'react'
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

function Chat() {
  const[chats,setChats]=useState([]);
    const fetchChats=async()=>{
        const {data}=await axios.get("/api/v1/chats");
        setChats(data);
    }

    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>
      {chats.map((chat)=>{
        return(
          <li key={chat._id}>{chat.chatName}</li>
        )
      })}
    </div>
  )
}

export default Chat
