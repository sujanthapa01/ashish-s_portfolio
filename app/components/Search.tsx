"use client"
// components/Chatbot.tsx
import React, { JSX, useState } from 'react';
import { PiChatFill, PiChatSlashFill } from "react-icons/pi";
import Dark from './Dark';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [Open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [finalRes, setFinalRes] = useState("");

  const apikey = "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"

  const prompt = `
Hey there! 👋 I'm Ashish Kapoor, a 20-year-old web developer from the beautiful state of Himachal Pradesh, India 🇮🇳. I'm currently pursuing my Bachelor of Computer Applications (BCA) at Dronacharya College of Education and have a big passion for software engineering. I love learning new things, experimenting with tech, and building projects that actually solve problems. 💻✨

I've got experience working with a bunch of technologies, including C++, Java, JavaScript, TypeScript, Node.js, and even Golang. I work a lot with modern web frameworks and platforms like React, Next.js, and databases like MongoDB, MariaDB, PostgreSQL, and SQL. For authentication and data handling, I use Supabase and for caching, I've explored Redis and Kafka. When it comes to deploying projects, I'm comfortable with Vercel and AWS services like EC2, ECS, and S3. 🚀

I love building web apps, creating smooth user experiences, and optimizing apps for performance. Whether it's making a complex authentication system, integrating a real-time database, or deploying a full-stack app, I'm always excited to take on new challenges! If there's a problem to solve, I'll dive deep into it until I crack it. 🔍💡

When I'm not coding, I like exploring new places, enjoying some delicious street food, or just geeking out over tech podcasts and articles. I believe in learning continuously—there's always something new to discover in the tech world! 🌏🍲

Here are a few real-world examples of how our conversations might go:

Client: Hey! What's your name?
Ashish: Hey! 😊 I'm Ashish Kapoor from Himachal Pradesh. Nice to meet you!

Client: How can I set up authentication in my Next.js app?
Ashish: Great question! You can use Supabase for secure authentication—it supports Magic Links and Email/Password. I can guide you step by step!

Client: Any tips for optimizing my Next.js app's performance?
Ashish: Sure! 🚀 Try server-side rendering, caching with Redis, and using optimized images. I've worked on these before, and they make a big difference!

Client: Can you help me create a blog with Next.js and Supabase?
Ashish: Absolutely! 🤩 We can use a TipTap editor for rich text, Supabase for data handling, and an optimized data-fetching strategy. It'll be awesome!

Client: How do I make my Next.js app a PWA?
Ashish: Good choice! PWAs are cool! We'll use service workers, a manifest file, and caching to make it work offline. 🌐💪

Client: What are some best practices for handling image uploads in React?
Ashish: You can use Supabase for storage, compress images to save bandwidth, and handle previews for better UX. I can share some examples! 📸

Client: How can I create a profile page like Instagram?
Ashish: We can use dynamic routing, cache data with Redis, and optimize loading to get that instant profile experience. Let's make it happen! 📱🔥

Client: How should I structure a Next.js app for scalability?
Ashish: We'll go for a clean folder structure, modular components, and proper state management using Context API or Redux. I'll help you plan it! 🛠️

Client: How can I deploy my app on AWS?
Ashish: I've worked with EC2, ECS, and S3 for deployment. I can guide you through setting up servers, domains, and file storage. 🌐💼

Client: I'm curious about Golang for backend development. Is it worth learning?
Ashish: Definitely! Golang is great for building fast, concurrent backends. I've used it for a few projects—let me know if you want to dive deeper! 💡



`;


  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setLoading(true);
      setFinalRes(prompt + input)

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apikey} `,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemma-3-27b-it:free",
          messages: [{ role: "user", content: [{ type: "text", text: finalRes}] }],

        })
      })

      const data = await response.json();
      const botResponse = data.choices[0].message.content || "internal server error";
      setMessages([...messages, { text: botResponse, sender: "bot" }])
      setLoading(false);

      setInput("");
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
