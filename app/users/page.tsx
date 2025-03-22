"use client";
import Link from "next/link";
import Image from "next/image";
import Study from "../components/Study";
import Img1 from "../../public/logo-transparent-svg copy.svg";
import Img2 from '../../public/Spotify-img.webp'
import { motion } from "motion/react";
import Data from "../json/Data.json";
import Discover from "../components/Discoverbtn";
import MarqueEffect from "../components/MarqueEffect";
import Tackstack from "../components/Tackstack";
export default function Users() {
  return (
    <>
      {/* 1st page */}
      <main className=" min-w-screen min-h-auto">
        <div className="Page1st">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
              <div className="min-w-full">
                <motion.div
                  initial={{ y: -70, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="md:text-7xl min-[360px]:text-5xl nabla-fier text-3xl font-bold flex gap-3 justify-center -rotate-4"
                >
                  <h1>Hi, I'm</h1>
                  <a className=" text-transparent bg-clip-text bg-gradient-to-l -rotate-6 from-info to-accent-content border-2 border-s-0 border-t-0 border-e-0 border-accent">
                   {Data.name} 
                  </a>
                </motion.div>
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="py-6 md:text-sm text-[12px] big-shoulders-inline-b"
                >
                  {Data.description1}
                  {Data.content1}
                </motion.p>
                <motion.button
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="btn btn-primary tooltip tooltip-bottom tooltip-info"
                  data-tip="About me"
                >
                  {" "}
                  <Link href="/users/about">Click to Know</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 2nd Page */}
      <main className="min-w-screen min-h-auto flex justify-center border border-neutral border-b-0 border-e-0 border-s-0 rounded-t-2xl">
        <div className="Page2nd w-full p-4 md:w-3/4">
          <h1 className="text-4xl tektur-GG">{Data.exp.title}</h1>
          <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-12">
            {Data.exp.content.map((exp) => (
              <motion.div
                key={exp._id}
                initial={{ y: 100, opacity: 0, scale: 0.6 }}
                whileInView={{ y: 0, opacity: 100, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{once:true}}
                className="card border-s border-neutral shadow-lg rounded-2xl shadow-base-300 md:-rotate-2 hover:shadow-xl transform hover:scale-105"
              >
                <div className="card-body grid grid-cols-2 gap-6">
                  <h2 className="card-title">{exp.logo}</h2>
                  <p className="text-sm">{exp.date}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">{exp.position}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* 3rd page */}
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="min-w-screen min-h-auto flex flex-col items-center p-10 justify-center"
      >
        <div className="page3rd h-full w-full p-14 md:w-3/4 overflow-x-hidden">
          <MarqueEffect />
        </div>
        <div className="techstack h-full w-full md:p-14 md:w-3/4">
          <Tackstack />
        </div>
      </motion.main>
      {/* page4th */}
      <main className="min-w-screen min-h-full w-full flex flex-col gap-5 md:p-10 items-center justify-center ">
        <h1 className="w-full md:w-3/5 text-5xl p-6 tektur-GG">Projects</h1>
        <div className="page h-full w-3/4 flex flex-wrap justify-center gap-15">
          <motion.div
            whileHover={{ y: -7 }}
            className="project border overflow-hidden h-auto  md:w-90 w-full rounded-xl"
          >
            <div className="h-54 rounded-t-xl w-full">
              <Image
                className="w-full h-full rounded-t-xl bg-[#000000] transition-all duration-300 hover:scale-105 scale-100 object-cover"
                src={Img1}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="content w-full h-full">
              <div className="flex justify-between p-3">
                <h1 className="sm:text-xl text-wrap font-semibold">Eduvibe</h1>
                <Link href="https://eduviibe.netlify.app/">
                  <Discover />
                </Link>
              </div>
              <p className="w-full py-2 px-4">Eduvibe is a platform that allow users to learn different languages</p>
              <div className="flex  gap-y-1 p-4 flex-wrap">
                <p className="badge badge-neutral">React</p>
                <p className="badge badge-neutral">Tailwind Css</p>
                <p className="badge badge-neutral">Javascript</p>
                <p className="badge badge-neutral">Mongodb</p>
                <p className="badge badge-neutral">Jwt</p>
                <p className="badge badge-neutral">Express js</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -7 }}
            className="project border h-auto  md:w-90 w-full rounded-xl overflow-hidden"
          >
            <div className="h-54  rounded-t-xl w-full ">
              <Image
                className="w-full h-full rounded-t-xl transition-all duration-300 hover:scale-105 scale-100 object-cover"
                src={Img2}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="content w-full h-full">
              <div className="flex justify-between p-3">
              <h1 className="sm:text-xl  font-semibold text-wrap">Spotify Clone</h1>
                <Link href="https://spotify-clone-pi-taupe.vercel.app/">
                  <Discover />
                </Link>
              </div>
              <p className="w-full py-2 px-4">It is a clone of Spotify full code not upload in website</p>
              <div className="flex  gap-y-1 p-4 flex-wrap">
                <p className="badge badge-neutral">React</p>
                <p className="badge badge-neutral">Tailwind Css</p>
                <p className="badge badge-neutral">Javascript</p>
              </div>
            </div>
          </motion.div>
        </div>
        <Link
            className="w-full p-5 text-info md:w-3/6 text-end hover:underline"
            href="/users/projects"
          >
           More Projects
          </Link>
      </main>
      {/* page5 */}
      <main className="min-w-screen h-auto p-5 sm:p-0 md:pb-10 pb-14 flex justify-center items-center">
        <Study/>
      </main>
    </>
  );
}
