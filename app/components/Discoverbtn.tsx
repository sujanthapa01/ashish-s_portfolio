import { motion } from "motion/react"
import { FaArrowRight } from "react-icons/fa6";
export default function Discover(){
    return(
        <>
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.8}} className="btn btn-wide rounded-4xl flex gap-2 bg-black text-white border-black hover:bg-white transition-all duration-500 hover:text-black">Discover <FaArrowRight/></motion.button>
        </>
    )
}