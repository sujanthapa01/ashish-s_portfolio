"use client";
import { motion } from "motion/react";
export default function Landing() {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 3.5, duration: 3 }}
        className=" min-w-screen min-h-screen z-20 fixed bg-black flex justify-center items-center text-5xl"
      >
        <motion.p
          className="absolute"
          initial={{ opacity: 10 }}
          animate={{ opacity: [10, 0, 0, 0] }}
          transition={{ delay: 0.2, ease: "easeInOut" }}
        >
          👋Hello
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 10, 0, 0] }}
          transition={{ delay: 0.4 }}
        >
          👋مرحبا
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 10, 0, 0] }}
          transition={{ delay: 0.8 }}
        >
          👋Bonjour
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 10, 0, 0] }}
          transition={{ delay: 1 }}
        >
          👋Hallo
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 10, 0] }}
          transition={{ delay: 1.2 }}
        >
          👋Ciao
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 0, 10, 0] }}
          transition={{ delay: 1.4 }}
        >
          👋こんにちは
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 10, 0] }}
          transition={{ delay: 1.6 }}
        >
          👋 안녕하세요
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0, 10, 0] }}
          transition={{ delay: 1.8 }}
        >
          👋你好
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0] }}
          transition={{ delay: 2 }}
        >
          👋 Привет
        </motion.p>
        <motion.p
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10] }}
          transition={{ delay: 2.2 }}
        >
          👋Hola
        </motion.p>
      </motion.div>
    </>
  );
}
