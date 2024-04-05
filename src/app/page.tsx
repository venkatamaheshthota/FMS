import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import HomeBlogData from "./homeBlogData";


export const metadata: Metadata = {
  title: "Florida Main Street - Communities",
  description: "Florida Main Street - Communities",
};

export default function Home() {
  const posts = HomeBlogData;
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Pricing />
      <HomeBlogSection posts={posts} />
      {/* <Features /> */}
      {/* <About /> */}
      {/* <CallToAction /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Contact /> */}
      {/* <Clients /> */}
    </main>
  );
}
