import { motion } from "motion/react";
import "./com.css"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill,RiPlayReverseLargeFill  } from "react-icons/ri";
import { SiTypescript,SiNetlify,SiJsonwebtokens,SiNodemon } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import {
  DiMongodb,
  DiJsBadge,
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiNodejs,
  DiNodejsSmall,
  DiNpm,
  
} from "react-icons/di";
export default function MarqueEffect() {
  return (
    <>
      <main className="flex p-8 gap-3 h-3/12 md:h-5/12 w-full myGradient">
        <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:15,ease:'linear',repeat:Infinity}} className="1stmarque  flex shrink-0 h-20 text-6xl gap-6 w-auto">
          <FaReact className="text-[#00D8FF]" />
          <DiJsBadge className="text-[#F0DB4E]" />
          <DiMongodb className="text-[#00ED64]" />
          <DiBootstrap className="text-[#8911FC]" />
          <DiCss3 className="text-[#1572B6]" />
          <DiHtml5 className="text-[#E34E26]" />
          <DiNodejs className="mask mask-hexagon w-24 text-black bg-[#8BC500] p-1" />
          <DiNodejsSmall className="text-[#83CD29]" />
          <DiNpm className="text-[#D50000]" />
          <RiTailwindCssFill className="text-[#00B9D8]" />
            <RiNextjsFill className="text-[#080808]" />
            <SiTypescript className="text-[#2D79C7]" />
            <SiNetlify className="text-[#05BEBA]" />
            <RiPlayReverseLargeFill className="text-[#000000]" />
            <SiJsonwebtokens className=" text-secondary-content" />
            <SiNodemon className="text-[#4F4D3F]" />
            <TbBrandThreejs className="text-[#080808]" />
        </motion.div>
        <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:15,ease:'linear',repeat:Infinity}} className="2stmarque  flex shrink-0 h-20 text-6xl gap-6 w-auto ">
          <FaReact className="text-[#00D8FF]" />
          <DiJsBadge className="text-[#F0DB4E]" />
          <DiMongodb className="text-[#00ED64]" />
          <DiBootstrap className="text-[#8911FC]" />
          <DiCss3 className="text-[#1572B6]" />
          <DiHtml5 className="text-[#E34E26]" />
          <DiNodejs className="mask mask-hexagon text-black bg-[#8BC500] p-1" />
          <DiNodejsSmall className="text-[#83CD29]" />
          <DiNpm className="text-[#D50000]" />
          <RiTailwindCssFill className="text-[#00B9D8]" />
            <RiNextjsFill className="text-[#080808]" />
            <SiTypescript className="text-[#2D79C7]" />
            <SiNetlify className="text-[#05BEBA]" />
            <RiPlayReverseLargeFill className="text-[#000000]" />
            <SiJsonwebtokens className="text-secondary-content" />
            <SiNodemon className="text-[#4F4D3F]" />
            <TbBrandThreejs className="text-[#080808]" />
        </motion.div>
      </main>
    </>
  );
}
