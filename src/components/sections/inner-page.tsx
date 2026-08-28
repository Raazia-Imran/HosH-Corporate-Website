"use client";

import Link from "next/link";
import {ArrowRight, CheckCircle2} from "lucide-react";
import {motion} from "motion/react";
import {reveal} from "@/lib/motion";

export type InnerPageItem={code:string;title:string;detail:string};

export function InnerPage({eyebrow,title,intro,items}:{eyebrow:string;title:string;intro:string;items:readonly InnerPageItem[]}){
  return <main className="relative min-h-screen overflow-hidden pb-24 pt-36">
    <div aria-hidden className="grid-bg absolute inset-0 -z-10"/>
    <div aria-hidden className="noise pointer-events-none absolute inset-0 -z-10"/>
    <motion.section initial="hidden" animate="visible" variants={reveal} className="container">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.05em] text-white sm:text-6xl lg:text-8xl">{title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p>
      <div className="mt-12 h-px bg-gradient-to-r from-cyan-300/70 via-cyan-300/15 to-transparent"/>
    </motion.section>
    <section className="container mt-14 grid gap-4 md:grid-cols-2" aria-label={`${eyebrow} details`}>
      {items.map((item,index)=><motion.article key={item.code} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:index*.07,duration:.65}} className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-200/30 sm:p-8">
        <div className="flex items-center justify-between"><span className="mono text-xs tracking-[.18em] text-cyan-200">{item.code}</span><CheckCircle2 className="size-5 text-cyan-300/70"/></div>
        <h2 className="mt-10 text-2xl font-medium tracking-tight text-white">{item.title}</h2>
        <p className="mt-3 leading-7 text-slate-400">{item.detail}</p>
      </motion.article>)}
    </section>
    <section className="container mt-16"><div className="rounded-3xl border border-cyan-200/15 bg-cyan-300/[.06] p-7 sm:flex sm:items-center sm:justify-between sm:p-10"><div><p className="eyebrow">Start a conversation</p><h2 className="mt-3 text-2xl font-medium">Discuss your technical assurance requirements.</h2></div><Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-white sm:mt-0">Contact HosH <ArrowRight className="size-4"/></Link></div></section>
  </main>;
}
