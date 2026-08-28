"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";
import {navigation} from "@/config/site";

export function Navigation(){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  const isActive=(href:string)=>pathname===href;

  return <header className="fixed inset-x-0 top-0 z-50 pt-4">
    <nav aria-label="Primary" className="glass container flex h-16 items-center justify-between rounded-2xl px-4 md:px-6">
      <Link href="/" className="flex items-center gap-3" aria-label="HosH home">
        <span className="grid size-9 place-items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 font-bold text-cyan-200">H</span>
        <span className="font-semibold tracking-[.18em]">HosH</span>
      </Link>
      <div className="hidden items-center gap-2 lg:flex">
        {navigation.map(item=><Link key={item.href} href={item.href} aria-current={isActive(item.href)?"page":undefined} className={`rounded-full px-3 py-2 text-sm transition-colors duration-300 ${isActive(item.href)?"bg-cyan-300/10 text-cyan-200":"text-slate-300 hover:bg-white/5 hover:text-cyan-200"}`}>{item.label}</Link>)}
        <Link href="/contact" aria-current={isActive("/contact")?"page":undefined} className="ml-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-white">Request inspection</Link>
      </div>
      <button type="button" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/5 lg:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(value=>!value)}>{open?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>
      {open&&<motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.25}} className="glass container mt-2 rounded-2xl p-4 lg:hidden">
        {[...navigation,{label:"Contact",href:"/contact"}].map(item=><Link onClick={()=>setOpen(false)} key={item.href} href={item.href} aria-current={isActive(item.href)?"page":undefined} className={`block rounded-xl px-4 py-3 transition-colors ${isActive(item.href)?"bg-cyan-300/10 text-cyan-200":"text-slate-200 hover:bg-white/5"}`}>{item.label}</Link>)}
      </motion.div>}
    </AnimatePresence>
  </header>;
}
