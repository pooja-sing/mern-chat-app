import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Chatpage() {
    const[chats,setChats]=useState("")

  const fetchData = async () => {
 const {response} = await axios.get('/api/chats');
      setChats(response)
    
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        {chats.map(chat => (
            <li key={chat.id}>{chat.message}</li>
          ))}
  </div>
  );
}

export default Chatpage;
