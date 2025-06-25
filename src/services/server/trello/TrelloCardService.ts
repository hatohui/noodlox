import { BASE_TRELLO_URL, TRELLO_AUTH } from "@/constants/server/trello";
import {
  GetTrelloCardByIdResponse,
  GetTrelloCardByListIdResponse,
} from "@/Interfaces/TrelloCardAPIType";
import axios from "axios";

export const getTrelloCardsByListId = async (listId: string) => {
  const query = `${BASE_TRELLO_URL}/lists/${listId}/cards?${TRELLO_AUTH}`;

  const { data } = await axios.get<GetTrelloCardByListIdResponse>(query);

  return data;
};

export const getTrelloCardbyId = async (cardId: string) => {
  const query = `${BASE_TRELLO_URL}/cards/${cardId}?${TRELLO_AUTH}&attachment_fields=all&checklists=all`;

  const { data } = await axios.get<GetTrelloCardByIdResponse>(query);

  return data;
};
