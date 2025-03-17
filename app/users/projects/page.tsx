'use client'
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Discover from "@/app/components/Discoverbtn";
import Data from '../../json/ProjectData.json'
export default function Project() {
  return (
    <div className=" min-w-screen min-h-auto flex flex-col  items-center justify-center pt-18 pb-20">
     <h1 className="text-3xl font-semibold underline">{Data.title}</h1>
      <main className="w-auto flex justify-center flex-wrap gap-6 xl:w-3/5 h-auto p-8">
     {Data.cont.map((cont)=>{
        return <motion.div
        initial={{y:100,opacity:0}}
        animate={{y:0,opacity:100}}
        transition={{duration:0.3}}
        className="project border overflow-hidden h-auto w-auto min-[376px]:w-80 rounded-xl hover:-translate-y-3 transition-all duration-200"
      key={cont._id}
      >
        <div className="h-54 rounded-t-xl w-full">
          <Image
            className="w-full h-full rounded-t-xl bg-[#000000] transition-all duration-300 hover:scale-105 scale-100 object-cover"
            src={cont.img}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="content w-full h-full">
          <div className="flex justify-between p-3">
            <h1 className="min-[298px]:text-xl text-wrap font-semibold">{cont.heading}</h1>
            <Link href={cont.link}>
              <Discover />
            </Link>
          </div>
          <p className="w-full py-2 px-4">{cont.description}</p>
          <div className="flex w-full  gap-y-1 p-4 flex-wrap">
            {cont.badge.map((bg)=>{
             return (
              <div key={bg._id}>
                {bg.badges.map((h) => {
                  return (
                    <div className="badge badge-neutral" key={h._id}>
                      {h.badge}
                    </div>
                  );
                })}
              </div>
            );
            })}
          </div>
        </div>
      </motion.div>
     })}
      

      </main>
    </div>
  );
}
