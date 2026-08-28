"use client";

import {motion, useReducedMotion} from "motion/react";
import type {ReactNode} from "react";
import {easeOutExpo} from "@/lib/motion";

export default function PageTransition({children}:{children:ReactNode}){
  const reduced=useReducedMotion();
  return <motion.div
    initial={reduced?false:{opacity:0,y:8}}
    animate={{opacity:1,y:0}}
    transition={{duration:reduced?0:.45,ease:easeOutExpo}}
  >{children}</motion.div>;
}
