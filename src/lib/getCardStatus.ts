import { TimeLineStatus } from "@/Interfaces/TrelloCardAPIType";
import { TrelloCheckItem } from "@/Interfaces/TrelloCheckItem";

export const getCardStatus = (
  checkItems: TrelloCheckItem[]
): TimeLineStatus => {
  switch (checkItems.length) {
    case 0:
      return "cancelled";
    case 1:
      return "not-started";
    case 6:
      return "finished";
    default:
      return "working";
  }
};
