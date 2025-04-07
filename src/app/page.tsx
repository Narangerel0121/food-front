import { Categories } from "@/components/code/Categories";
import { Footer } from "@/components/code/Footer";
import { Header } from "@/components/code/Header";
import { MainPage } from "@/components/code/MainPage";
import { Try } from "@/components/code/Try";
import { Main } from "next/document";
import { Search } from "../components/code/Search";

export default function Home() {

  return (
    <div className="bg-neutral-700">
      <Search />

      <Header />
      <Categories />
      <img src="/assets/main.png" className="w-screen" />
      {/* <Try /> */}
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
}
