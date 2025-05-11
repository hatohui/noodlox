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
    <>
      <div className="w-full justify-center lg:h-[calc(100%-40px)] h-[calc(100%-30px)] relative pointer-events-none">
        <motion.img
          src={imgSrc}
          alt={alt}
          className={`w-full h-full relative object-cover ${className}`}
          initial={{
            rotate: 3,
            filter: "grayscale(100%) brightness(60%)",
            zIndex: 0,
            objectPosition: objectPosFrom,
          }}
          animate={isHovered ? "hovered" : ""}
          variants={{
            hovered: {
              scale: 1.2,
              rotate: 5,
              filter: "grayscale(0) brightness(100%)",
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
