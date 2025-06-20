import { BASE_TRELLO_URL, TRELLO_AUTH } from "@/constants/server/trello";
import { GetTrelloCardByListIdResponse } from "@/Interfaces/TrelloCardAPIType";
import axios from "axios";

export const getTrelloCardsByListId = async (listId: string) => {
  const query = `${BASE_TRELLO_URL}/lists/${listId}/cards?${TRELLO_AUTH}`;

  const { data } = await axios.get<GetTrelloCardByListIdResponse>(query);

  return data;
};
