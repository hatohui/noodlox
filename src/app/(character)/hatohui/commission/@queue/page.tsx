import { cn } from "@/lib/utils";
import React from "react";

export type TimeLineStatus =
  | "finished"
  | "working"
  | "not-started"
  | "on-hold"
  | "cancelled";

export type TimeLineCardProps = {
  date: Date;
  name: string;
  status?: TimeLineStatus;
};

const TimeLineCard = ({ date, name, status }: TimeLineCardProps) => {
  let statusString;
  let style;

  switch (status) {
    case "working":
      statusString = "Working";
      style = "text-yellow-600";
      break;
    case "finished":
      statusString = "Finished";
      style = "text-green-600";
      break;
    case "not-started":
      statusString = "Not Started";
      style = "text-red-600";
      break;
    case "on-hold":
      statusString = "On Hold";
      style = "text-gray-600";
      break;
    case "cancelled":
      statusString = "Cancelled";
      style = "text-red-600";
      break;
    default:
      statusString = "Not Started";
  }

  return (
    <div className="flex items-center gap-4">
      <div className="size-3 rounded-full bg-green-700 animate-pulse" />

      <div className="rounded-lg shadow p-4 flex gap-5">
        <section>
          <p className="font-thin text-sm">{date.toLocaleDateString()}</p>
          <p className="font-bold text-lg">{name}</p>
        </section>

        <div className="bg-slate-600 w-1" />

        <section className="w-20">
          <p className="font-medium">Status</p>
          <p className={cn("font-thin text-sm", style)}>{statusString}</p>
        </section>
      </div>
    </div>
  );
};

const QueueSection = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div>
        <div className="font-bold text-xl pb-2">Jul</div>
        <div className="flex flex-col gap-3">
          <div className="absolute h-full w-1 ml-1 bg-black" />
          <TimeLineCard
            date={new Date()}
            name="Sil_15_2501"
            status="cancelled"
          />
          <TimeLineCard
            date={new Date()}
            name="Sil_15_2501"
            status="cancelled"
          />
        </div>
      </div>
    </div>
  );
};

export default QueueSection;
