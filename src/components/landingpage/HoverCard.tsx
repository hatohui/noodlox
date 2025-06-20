import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedTape from "./AnimatedTape";
import CardBannerImage from "./CardBannerImage";
import { cn } from "@/lib/utils";

export type CardChar = "zag" | "hat";

export type HoverCardProps = {
  id: CardChar;
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
  id,
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
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), waitTime ?? 0);
    return () => clearTimeout(timeout);
  }, [waitTime]);

  const handleHover = () => {
    const timer = setTimeout(() => setIsHovered(true), 300);
    setHoverTimer(timer);
  };

  const handleHoverLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setIsHovered(false);
  };

  const rotateDuration = 2;
  const scaleDuration = 0.5;
  const opacityDuration = 0.1;

  return (
    <>
      {/* The card */}
      <motion.button
        className={cn(
          "h-[calc(var(--spacing)*20+40px)] w-[calc(100%+40px)] focus:outline-none max-h-[35%] flex-1 relative select-none",
          className
        )}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchCancel={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={onClick}
        onTap={() => setIsHovered(true)}
        onTapCancel={() => setIsHovered(false)}
        whileTap={{ scale: 0.9, zIndex: 40 }}
      >
        <div className=""></div>
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
          id={id}
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
        className={cn(
          "absolute animate-pulse top-0 left-0 w-screen h-screen z-40 [mask-image:url('/axiom-pattern.png')] brightness-200 pointer-events-none",
          isHovered
            ? id === "zag"
              ? "bg-[#bb5a1a]"
              : "bg-green-600"
            : "hidden"
        )}
      />
      <div
        className={cn(
          "absolute h-screen w-screen top-0 pointer-events-none z-30",
          isHovered ? "bg-black opacity-96" : ""
        )}
      />
    </>
  );
};

export default HoverCard;
