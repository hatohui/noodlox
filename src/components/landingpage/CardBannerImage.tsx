import React from "react";
import * as motion from "motion/react-client";
import { CardChar } from "./HoverCard";

export type CardBannerImageProps = {
  imgSrc: string;
  alt: string;
  id: CardChar;
  objectPosFrom: string;
  objectPosTo: string;
  isHovered: boolean;
  translateY: number | undefined;
  rotateDuration: number;
  className: string | undefined;
  scaleDuration: number;
  opacityDuration: number;
};

const CardBannerImage = ({
  id,
  imgSrc,
  objectPosFrom,
  objectPosTo,
  isHovered,
  translateY,
  rotateDuration,
  className,
  scaleDuration,
  opacityDuration,
  alt,
}: CardBannerImageProps) => {
  const imagePositionDuration = 0.3;

  return (
    <>
      <div className="w-full justify-center lg:h-[calc(100%-40px)] h-[calc(100%-30px)] overflow-visible relative pointer-events-none">
        <motion.div
          className={`h-full w-full absolute  ${
            id === "zag"
              ? "bg-cyan-300 shadow-[0_-2px_20px_4px_rgba(83,234,253,0.8)] "
              : "bg-amber-200 shadow-[0_-2px_20px_4px_rgba(251,191,36,0.8)]"
          }`}
          initial={{
            rotate: 3,
            zIndex: 0,
            filter: "grayscale(100%) brightness(50%)",
            objectPosition: objectPosFrom,
          }}
          animate={isHovered ? "hovered" : ""}
          variants={{
            hovered: {
              scale: 1.2,
              rotate: 5,
              filter: "grayscale(0) ",
              y: translateY ?? 0,
              transition: {
                scale: { type: "spring", duration: scaleDuration },
                filter: { duration: opacityDuration, ease: "linear" },
                rotate: {
                  duration: rotateDuration,
                },
                y: {
                  duration: scaleDuration,
                  type: "spring",
                },
              },
              zIndex: 50,
            },
          }}
        />
        <motion.img
          className={`absolute w-full h-full object-cover overflow-visible z-60 ${className}`}
          src={imgSrc}
          initial={{ rotate: 3, opacity: 0, objectPosition: objectPosFrom }}
          animate={isHovered ? "hovered" : ""}
          variants={{
            hovered: {
              opacity: 1,
              scale: 0.8,
              y: translateY ?? 0,
              rotate: [4, 5, 4],
              objectPosition: objectPosTo,
              transition: {
                scale: { type: "spring", duration: scaleDuration },
                filter: { duration: opacityDuration, ease: "linear" },
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
                objectPosition: {
                  duration: imagePositionDuration,
                  ease: "easeIn",
                },
                y: {
                  duration: scaleDuration,
                  type: "spring",
                },
                opacity: {
                  duration: imagePositionDuration,
                  type: "spring",
                },
              },
            },
          }}
        />
        <motion.img
          src={imgSrc}
          alt={alt}
          className={`h-full w-full relative object-cover ${className} ${
            id === "zag" ? "" : "w-full"
          }`}
          initial={{
            rotate: 3,
            filter: "grayscale(100%) brightness(60%)",
            zIndex: 0,
            objectPosition: objectPosFrom,
          }}
          animate={isHovered ? "hovered" : ""}
          variants={{
            hovered: {
              opacity: 0,
              scale: 1.2,
              rotate: 5,
              filter: "grayscale(100%) brightness(50%) saturate(3)",
              y: translateY ?? 0,
              objectPosition: objectPosTo,
              transition: {
                scale: { type: "spring", duration: scaleDuration },
                filter: { duration: opacityDuration, ease: "linear" },
                rotate: {
                  duration: rotateDuration,
                },
                objectPosition: {
                  duration: imagePositionDuration,
                  ease: "easeIn",
                },
                y: {
                  duration: scaleDuration,
                  type: "spring",
                },
              },
              zIndex: 50,
            },
          }}
        />
      </div>
    </>
  );
};

export default CardBannerImage;
