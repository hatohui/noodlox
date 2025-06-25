import { TrelloCard } from "@/Interfaces/TrelloCard";
import { TrelloImage } from "./TrelloImage";
import { DetailedCheckItem, TrelloCheckItem } from "./TrelloCheckItem";

/**
 * Type definition for the response from the Trello API for a specific card.
 *
 * This response contains the card with the specified ID and its associated
 * data.
 */
export type GetTrelloCardByListIdResponse = TrelloCard[];

/**
 * Type definition for the response from the Trello API for a specific card.
 *
 * This response contains the card with the specified ID and its associated
 * data.
 */
export type GetTrelloCardByIdResponse = TrelloCard;

export type GetTrelloCardByListName = {
  artist: string;
  cards: TrelloCardDTO[];
};

export type TrelloCardDTO = {
  id: string;
  name: string;
  desciption: string;
  completed: boolean;
  lastActivity: string | null;
  due: string | null;
  paid: boolean;
  status: TimeLineStatus;
  images: TrelloImage[];
  checkItems: DetailedCheckItem[];
};

export type TrelloListName = "queue" | "working" | "finished";

export type TimeLineStatus =
  | "finished"
  | "working"
  | "not-started"
  | "on-hold"
  | "cancelled";
