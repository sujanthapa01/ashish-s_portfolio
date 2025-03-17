"use client"
// components/Chatbot.tsx
import React, { useState } from 'react';
import { PiChatFill, PiChatSlashFill } from "react-icons/pi";
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
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      // Simulate a bot response based on user input
      setTimeout(() => {
        let botResponse = 'I am not sure how to respond to that.';

        if (/h(e|a)?l{1,2}o?/i.test(input)) {
          botResponse = 'Hello! How can I help you?';
        } else if (input.toLowerCase().includes('how are you')) {
          botResponse = 'I am just a bot, but I am here to help you!';
        } else if (input.toLowerCase().includes('what is your name')) {
          botResponse = 'I am Cocopi, your programming assistant.';
        } else if (input.toLowerCase().includes('what can you do')) {
          botResponse = 'I can assist you to know about this website';
        } else if (input.toLowerCase().includes('tell me a joke')) {
          botResponse = 'Why do programmers prefer dark mode? Because light attracts bugs!';
        }

        setMessages((msgs) => [...msgs, { text: botResponse, sender: 'bot' }]);
      }, 500);

      setInput('');
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <>
      <div className='flex gap-2 sm:gap-4'>
        <button className='min-[275]:text-2xl p-1' onClick={() => { setOpen(!Open) }}>
          {Open ? <PiChatSlashFill /> : <PiChatFill />}
        </button>
        <Dark />
      </div>
      {Open ? (
        <div className="fixed bottom-4 right-4 w-auto p-6 md:w-80 bga shadow-lg rounded-lg border border-gray-200">
          <div className="p-4 h-36 md:h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-black'}`}
                style={{ maxWidth: '70%', animation: 'fadeIn 0.5s' }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-2 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
              Send
            </button>
          </form>
          <button onClick={handleClearChat} className="mt-2 w-full p-2 bg-red-500 text-white rounded-lg">
            Clear Chat
          </button>
        </div>
      ) : null}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}