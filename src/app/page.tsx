"use client";
import Navbar from "@/components/home/Navbar";
import MainCards from "@/components/home/cards/MainCards";
import History from "@/components/home/history/History";
import Image from "next/image";
import { useEffect } from "react";
import { socket } from "../socket";

export default function Home() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);
  return (
    <main className="w-screen h-screen flex flex-col font-kanit ">
      <h1 className="text-xl p-8">
        <Image src="/logo.png" width={200} height={200} alt="logo" />
      </h1>
      <div className="flex flex-1  p-2 w-full">
        <Navbar />
        <div className=" m-4 w-full flex flex-col gap-4">
          <MainCards />
          <History />
        </div>
      </div>
    </main>
  );
}
