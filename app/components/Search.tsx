"use client"
// components/Chatbot.tsx
import React, { JSX, useState } from 'react';
import { PiChatFill, PiChatSlashFill } from "react-icons/pi";
import Dark from './Dark';

type Message = {
  text: string | JSX.Element;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [Open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setLoading(true);

      // Simulate a bot response based on user input
      setTimeout(
        async () => {
        try {
          let botResponse:string | JSX.Element ="";
          if (input.toLowerCase().includes('about you')|| input.toLowerCase().includes("about")) {
            botResponse = 'Hello! I am a chatbot created to assist you. I can help you with various tasks and provide information about this website.';
          }else if(input.toLowerCase().includes("about this website")){
             botResponse = "This website is created by Ashish. It uses various frameworks and packages including React for the frontend, Next.js for server-side rendering, and Tailwind CSS for styling. Additionally, it leverages Axios for making HTTP requests and React Icons for icons.";
            } else if (input.toLowerCase().includes("technologies used")) {
            botResponse = "The technologies used in this website include React, Next.js, Tailwind CSS, and Axios.";
            } else if (input.toLowerCase().includes("purpose of this website")) {
            botResponse = "The purpose of this website is to showcase a portfolio of projects and provide information about the creator's skills and experience.";
            } else if (input.toLowerCase().includes("contact information")) {
            botResponse = "You can contact the creator via email at kapoorashish714@gmail.com or through the contact form on the website.";
            } else if (input.toLowerCase().includes("services offered")) {
            botResponse = "The services offered include web development, mobile app development";
            } else if (input.toLowerCase().includes("pricing information")) {
            botResponse = "For pricing information, please contact the creator directly through the contact form or email.";
            } else if (input.toLowerCase().includes("portfolio")|| input.toLowerCase().includes("projects")) {
            botResponse = <div className='h-24 w-24 rounded-2xl bg-gray-600'> Projects</div>;
            }
             else {
              const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": "Bearer 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",
              "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
              "X-Title": "Portfolio", // Optional. Site title for rankings on openrouter.ai.
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "model": "nvidia/llama-3.1-nemotron-70b-instruct:free",
              "messages": [
                {
                  "role": "user",
                  "content": input.toLowerCase(),
                }
              ]
            })
          });

          const data = await response.json();
           botResponse = data.choices[0].message.content || "internal server error";
        }
          setMessages((msgs) => [...msgs, { text: botResponse, sender: 'bot' }]);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }, 500);

      setInput('');
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <>
    <main className=' -z-10'>
      <div className='flex gap-2 sm:gap-4 text-white'>
        <button className='min-[275]:text-2xl p-1 z-20 text-neutral-600' onClick={() => { setOpen(!Open) }}>
          {Open ? <PiChatSlashFill /> : <PiChatFill />}
        </button>
        <Dark />
      </div>
      {Open ? (
        <div className="fixed top-0 left-0 w-full h-full mb-20 p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
          <div className="p-4 h-full flex flex-col overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-700 text-white'}`}
                style={{ maxWidth: '70%', animation: 'fadeIn 0.5s' }}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="skeleton-loader">
                <div className="skeleton skeleton-line"></div>
                <div className="skeleton skeleton-line"></div>
                <div className="skeleton skeleton-line"></div>
              </div>
            )}
          </div>
          <div className='bg-gray-800 p-4 absolute bottom-0 right-0'>
            <form onSubmit={handleSend} className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow p-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
              <button type="submit" className="ml-2 p-2 w-28 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Send
              </button>
            </form>
            <button onClick={handleClearChat} className="mt-2 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
              Clear Chat
            </button>
          </div>
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
        .skeleton-loader {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .skeleton {
          background: linear-gradient(90deg, #3b3b3b 25%, #4b4b4b 50%, #3b3b3b 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .skeleton-line {
          width: 100%;
          height: 20px;
          border-radius: 10px;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      </main>
    </>
  );
}