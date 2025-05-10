import React from "react";
import * as motion from "motion/react-client";

export type CardBannerImageProps = {
  imgSrc: string;
  alt: string;
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
  const imagePositionDuration = 10;

  return (
    <motion.img
      src={imgSrc}
      alt={alt}
      className={`w-full h-[calc(100%-40px)] relative object-cover pointer-events-none ${className}`}
      initial={{
        rotate: 3,
        opacity: 0.3,
        zIndex: 0,
        objectPosition: objectPosFrom,
      }}
      animate={isHovered ? "hovered" : ""}
      variants={{
        hovered: {
          scale: 1.2,
          rotate: 5,
          opacity: 1.5,
          y: translateY ?? 0,
          objectPosition: objectPosTo,
          transition: {
            scale: { type: "spring", duration: scaleDuration },
            opacity: { duration: opacityDuration, ease: "linear" },
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
  );
};

export default CardBannerImage;
