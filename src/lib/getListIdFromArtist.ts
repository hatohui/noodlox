import {
  HATO_FINISHED_LIST_ID,
  HATO_QUEUE_LIST_ID,
  HATO_WORKING_LIST_ID,
  ZAGVANDR_LIST_ID,
} from "@/constants/server/trello";
import { TrelloListName } from "@/Interfaces/TrelloCardAPIType";

export const getListIdFromArtist = (
  query: TrelloListName,
  artist: string | undefined
) => {
  switch (query) {
    case "working":
      return artist
        ? artist === "hatohui"
          ? HATO_WORKING_LIST_ID
          : ZAGVANDR_LIST_ID
        : null;
    case "finished":
      return artist
        ? artist === "hatohui"
          ? HATO_FINISHED_LIST_ID
          : ZAGVANDR_LIST_ID
        : null;
    case "queue":
      return artist
        ? artist === "hatohui"
          ? HATO_QUEUE_LIST_ID
          : ZAGVANDR_LIST_ID
        : null;
  }
};
