import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedTape from "./Landing/AnimatedTape";
import CardBannerImage from "./Landing/CardBannerImage";

export type HoverCardProps = {
  imgSrc: string;
  alt: string;
  className?: string;
  objectPosFrom: string;
  objectPosTo: string;
  onClick?: () => void;
  waitTime?: number;
  translateY?: number;
};

const HoverCard = ({
  imgSrc,
  alt,
  className,
  objectPosFrom,
  objectPosTo,
  onClick,
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
      {/* Black-filter */}
      <motion.div
        className="absolute inset-0 pointer-events-none h-screen w-screen bg-black"
        initial={{ opacity: 0, zIndex: 40 }}
        animate={isHovered ? "hovered" : "idle"}
        variants={{
          idle: {
            opacity: [0.3, 0.5],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
          hovered: { opacity: 0.9, zIndex: 30 },
        }}
      />

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
    </>
  );
};

export default HoverCard;
