"use client";
import {motion,useSpring} from "motion/react";
import {useEffect} from "react";
export function CursorGlow(){const x=useSpring(-80,{stiffness:500,damping:38});const y=useSpring(-80,{stiffness:500,damping:38});useEffect(()=>{const move=(e:PointerEvent)=>{x.set(e.clientX-9);y.set(e.clientY-9)};window.addEventListener("pointermove",move,{passive:true});return()=>window.removeEventListener("pointermove",move)},[x,y]);return <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] hidden size-[18px] rounded-full border border-cyan-200 bg-cyan-300/25 shadow-[0_0_22px_#25e6ff] md:block" style={{x,y}}/>}
