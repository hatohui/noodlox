"use client";
import React from "react";
import HoverCard from "@/Components/HoverCard";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center gap-3 h-dvh w-dvw overflow-hidden py-[15rem] sm:py-16 lg:py-20">
        {/* <motion.div
          className="absolute top-0 left-0 h-2 bg-amber-300"
          initial={{ x: "-33vw", width: "33vw" }}
          animate={{
            x: ["-33vw", "10vw", "60vw", "95vw"],
            width: ["33vw", "33vw", "15vw", "5vw"],
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: 2,
              times: [0, 0.3, 0.7, 1],
            },
          }}
        /> */}
        <HoverCard
          imgSrc="/Landing/ZagvandrBanner.jpg"
          alt="demon fox image"
          objectPosFrom="center 33%"
          objectPosTo="left 50%"
          onClick={() => router.push("/zagvandr")}
          translateY={100}
        />
        <HoverCard
          imgSrc="/Landing/HatohuiBanner.png"
          alt="noodle dragon image"
          objectPosFrom="center 20%"
          objectPosTo="left 35%"
          onClick={() => router.push("/hatohui")}
          waitTime={800}
          translateY={-100}
        />
      </div>
    </>
  );
};

export default Page;
