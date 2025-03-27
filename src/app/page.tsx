import { Footer } from "@/components/code/Footer";
import { Header } from "@/components/code/Header";
import { MainPage } from "@/components/code/MainPage";
import { Try } from "@/components/code/Try";
import { Main } from "next/document";

export default function Home() {
  
  return (
   <div className="bg-neutral-700">
    <Header />
    <Try />
    {/* <MainPage /> */}
    <Footer />
   </div>
  );
}
