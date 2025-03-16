"use client"
// components/Chatbot.tsx
import { useState } from 'react';
import { PiChatFill,PiChatSlashFill } from "react-icons/pi";
import Dark from './Dark';
type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [Open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');


  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Simulate a bot response
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { text: 'Hello! How can I help you?', sender: 'bot' }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <>
     <div className='flex gap-2 sm:gap-4'>
     <button className='min-[275]:text-2xl p-1' onClick={()=>{setOpen(!Open)}}>{Open ? <PiChatSlashFill />:<PiChatFill />  }</button>
      <Dark/>
      </div>
    {Open? <div className="fixed bottom-4 right-4 w-auto p-6 md:w-80 bg-accent-content shadow-lg rounded-lg border border-gray-200">
      <div className="p-4 h-36 md:h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-black'
            }`}
            style={{ maxWidth: '70%' }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="p-2 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </form>
    </div>:<></>}
   
    </>
  );
}
