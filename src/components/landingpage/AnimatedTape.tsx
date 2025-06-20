import * as motion from "motion/react-client";

export type AnimatedTapeProps = {
  position: "top" | "bot";
  isReady: boolean;
  isHovered: boolean;
  translateY: number | undefined;
  scaleDuration: number;
  rotateDuration: number;
  opacityDuration: number;
};

const AnimatedTape = ({
  position,
  isReady,
  isHovered,
  translateY,
  scaleDuration,
  rotateDuration,
  opacityDuration,
}: AnimatedTapeProps) => {
  const filterArray = [
    "brightness(0%) saturate(-30%)",
    "brightness(25%) saturate(0)",
    "brightness(40%) saturate(50)",
  ];

  const hoveredFilterArray = [
    "brightness(90%) saturate(90%)",
    "brightness(120%) saturate(120%)",
  ];

  const filterDuration = 1.3;
  const borderAnimationDuration = 4;

  return (
    <motion.div
      className={`absolute lg:h-[20px] h-[15px] w-full bg-repeat-x bg-[url('/Landing/caution-tape.jpg')] select-none pointer-events-none ${
        position === "top"
          ? "top-0 shadow-[0_-2px_20px_4px_rgba(251,191,36,0.8)]"
          : "bottom-0 shadow-[0_2px_20px_4px_rgba(251,191,36,0.8)]"
      }`}
      initial={{ rotate: 3, zIndex: 10, opacity: 0.8 }}
      animate={!isReady ? false : isHovered ? "hovered" : "idle"}
      variants={{
        idle: {
          filter: filterArray,
          transition: {
            filter: {
              duration: filterDuration,
              repeat: Infinity,
              repeatType: "mirror",
            },
          },
        },
        hovered: {
          scale: 1.1,
          y: (position === "top" ? -50 : 50) + (translateY ?? 0),
          rotate: 5,
          zIndex: 50,
          backgroundPositionX: position === "top" ? "100%" : "-100%",
          opacity: 1,
          filter: hoveredFilterArray,
          transition: {
            scale: { type: "spring", duration: scaleDuration },
            y: { duration: scaleDuration, type: "spring" },
            rotate: { duration: rotateDuration },
            opacity: { duration: opacityDuration },
            backgroundPositionX: {
              duration: borderAnimationDuration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
            transition: {
              filter: {
                duration: filterDuration,
                repeat: Infinity,
                repeatType: "mirror",
              },
            },
          },
        },
      }}
    />
  );
};

export default AnimatedTape;
