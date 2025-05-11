"use client";
import React from "react";
import HoverCard from "@/Components/HoverCard";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col relative items-center gap-3 h-dvh w-dvw overflow-hidden py-[15rem] sm:py-16 lg:py-28">
        <HoverCard
          id="zag"
          imgSrc="/Landing/zag-no-bg.png"
          alt="demon fox image"
          objectPosFrom="center 33%"
          objectPosTo="left 40%"
          // onClick={() => router.push("/zagvandr")}
          translateY={100}
        />
        <HoverCard
          id="hat"
          imgSrc="/Landing/hato-no-bg.webp"
          alt="noodle dragon image"
          objectPosFrom="center 20%"
          objectPosTo="left 35%"
          // onClick={() => router.push("/hatohui")}
          waitTime={800}
          translateY={-100}
        />
        {/* <div className="absolute flex items-center justify-center text-center bottom-[2rem] right-[2rem] z-50 backdrop-blur-sm h-5 w-[30%] rounded-4xl select-none border-gray-300 border-2 p-5">
          <span className="font-bold text-xs lg:text-xl animate-pulse">
            CHARACTER SELECTION
          </span>
        </div> */}
      </div>
      <div className="absolute animate-pulse brightness-200 top-0 left-0 w-screen h-screen bg-[url('/axiom-pattern.png')] -z-50" />
    </>
  );
};

export default Page;
