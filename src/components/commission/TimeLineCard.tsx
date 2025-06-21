import { TimeLineStatus } from "@/Interfaces/TrelloCardAPIType";
import { cn } from "@/lib/utils";

export type TimeLineCardProps = {
  date: string | null;
  name: string;
  status?: TimeLineStatus;
  className?: string;
};

const TimeLineCard = ({
  date,
  name,
  status,
  className = "",
}: TimeLineCardProps) => {
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
    <section className="flex timeline-card items-center gap-5 px-2 truncate">
      <div className="size-3 rounded-full bg-green-500 animate-caret-blink z-20" />
      <div className="absolute size-3 rounded-full bg-gray-400 z-10" />
      <div className="absolute h-full w-1 ml-1 bg-gray-400" />

      <div className="text-sm font-thin">{date}</div>
      <div
        className={cn(
          className,
          "rounded-xl border-2 shadow-md p-4 flex gap-5 hover:bg-slate-200 transition duration-150"
        )}
      >
        <div className="w-16">
          <p className="font-thin text-sm">For</p>
          <p className="font-bold text-lg">{name}</p>
        </div>

        <div className="bg-slate-400 w-[3px] rounded" />

        <div className="w-20">
          <p className="font-medium">Status</p>
          <p className={cn("font-thin text-sm", style)}>{statusString}</p>
        </div>
      </div>
    </section>
  );
};

export default TimeLineCard;
