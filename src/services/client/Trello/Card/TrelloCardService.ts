import { Artist } from "@/Interfaces/Artist";
import {
  GetTrelloCardByListName,
  TrelloListName,
} from "@/Interfaces/TrelloCardAPIType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TRELLO_CARD_API_URL = "/api/trello/cards";

const trelloCardApi = {
  getCardsByListName: async (listName: TrelloListName, artist: Artist) => {
    const query = `${TRELLO_CARD_API_URL}/${artist}/${listName}`;
    const response = await axios.get<GetTrelloCardByListName>(query);
    return response.data;
  },
};

export const useGetCardsByListName = (
  listName: TrelloListName,
  artist: Artist
) => {
  return useQuery({
    queryKey: ["cards", listName, artist],
    queryFn: () => trelloCardApi.getCardsByListName(listName, artist),
  });
};
