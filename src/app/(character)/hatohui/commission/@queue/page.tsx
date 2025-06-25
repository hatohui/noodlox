"use client";
import TimeLineCard from "@/components/commission/TimeLineCard";
import { useQueryUIState } from "@/hooks/useQueryUIState";
import { useGetCardsByListName } from "@/services/client/Trello/Card/TrelloCardService";
import { motion, stagger, useAnimate } from "motion/react";
import React, { useEffect } from "react";

const QueueSection = () => {
  const query = useGetCardsByListName("working", "hatohui");
  const { data } = query;
  const queryUI = useQueryUIState({ query });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    animate(
      "section",
      { opacity: [0, 1], x: [30, 0] },
      { delay: stagger(0.1) }
    );
  });

  if (queryUI || !data?.cards || !data)
    return <div className="w-full h-screen">{queryUI}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -30 }}
      animate={{ opacity: 1, translateX: 0 }}
      className="flex flex-col gap-2"
    >
      <div className="font-bold text-2xl pb-2 ">QUEUE</div>
      <div
        ref={scope}
        className="flex relative flex-col gap-3 overflow-hidden select-none"
      >
        {data.cards.map((card, index) => (
          <TimeLineCard
            key={card.id}
            className={
              index === 0
                ? " border-b-emerald-500 bg-blue-50"
                : "border-b-red-500"
            }
            date={card.lastActivity}
            name={card.name}
            status={card.status}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default QueueSection;
