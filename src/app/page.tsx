import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { AssuranceStrip } from "@/components/sections/assurance-strip";
import { HomeSections } from "@/components/sections/home-sections";

export default function Home() {
  return <main><Hero /><AssuranceStrip /><Capabilities /><HomeSections /></main>;
}
