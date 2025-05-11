import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedTape from "./Landing/AnimatedTape";
import CardBannerImage from "./Landing/CardBannerImage";

export type HoverCardProps = {
  id: "zag" | "hat";
  imgSrc: string;
  popUpSrc: string;
  alt: string;
  className?: string;
  objectPosFrom: string;
  objectPosTo: string;
  onClick?: () => void;
  waitTime?: number;
  translateY?: number;
};

const HoverCard = ({
  id,
  imgSrc,
  alt,
  className,
  objectPosFrom,
  objectPosTo,
  onClick,
  popUpSrc,
  waitTime,
  translateY,
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), waitTime ?? 0);
    return () => clearTimeout(timeout);
  }, [waitTime]);

  const rotateDuration = 2;
  const scaleDuration = 0.3;
  const opacityDuration = 0.1;

  return (
    <>
      {/* <motion.img
        src={popUpSrc}
        className="absolute mt-3 hidden lg:block bot-0 left-0 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 object-cover z-[99] pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? "hovered" : ""}
        variants={{ hovered: { scale: 1, opacity: 1 } }}
      /> */}
      {/* The card */}
      <motion.button
        className="h-[calc(var(--spacing)*20+40px)] w-[calc(100%+40px)] focus:outline-none flex-1 relative select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchCancel={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={onClick}
      >
        <AnimatedTape
          position="top"
          isReady={isReady}
          isHovered={isHovered}
          translateY={translateY}
          scaleDuration={scaleDuration}
          rotateDuration={rotateDuration}
          opacityDuration={opacityDuration}
        />
        <CardBannerImage
          className={className}
          imgSrc={imgSrc}
          alt={alt}
          objectPosFrom={objectPosFrom}
          objectPosTo={objectPosTo}
          isHovered={isHovered}
          translateY={translateY}
          rotateDuration={rotateDuration}
          scaleDuration={scaleDuration}
          opacityDuration={opacityDuration}
        />
        <AnimatedTape
          position="bot"
          isReady={isReady}
          isHovered={isHovered}
          translateY={translateY}
          scaleDuration={scaleDuration}
          rotateDuration={rotateDuration}
          opacityDuration={opacityDuration}
        />
      </motion.button>

      {/* background filter */}
      <div
        className={`absolute animate-pulse top-0 left-0 w-screen h-screen z-40 [mask-image:url('/axiom-pattern.png')] brightness-200 pointer-events-none ${
          isHovered
            ? id === "zag"
              ? "bg-[#bb5a1a]"
              : "bg-green-600"
            : "hidden"
        }`}
      />
      <div
        className={`absolute h-screen w-screen top-0 pointer-events-none z-30  ${
          isHovered ? "bg-black opacity-96" : ""
        }`}
      />
    </>
  );
};

export default HoverCard;
