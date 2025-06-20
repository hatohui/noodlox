import { TrelloCard } from "@/Interfaces/TrelloCard";

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

export type TrelloCardResponse =
  | GetTrelloCardByIdResponse
  | GetTrelloCardByListIdResponse;
