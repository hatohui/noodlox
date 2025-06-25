import {
  HATO_FINISHED_LIST_ID,
  ZAGVANDR_LIST_ID,
} from "@/constants/server/trello";
import { Artist } from "@/Interfaces/Artist";
import {
  GetTrelloCardByListName,
  TrelloCardDTO,
} from "@/Interfaces/TrelloCardAPIType";
import { withErrorHandler } from "@/lib/server";
import { getTrelloCardsByListId } from "@/services/server/trello/TrelloCardService";
import { NextApiHandler } from "next";
import { format } from "date-fns";
import { getCardStatus } from "@/lib/getCardStatus";

const handler: NextApiHandler = async (req, res) => {
  const artist = req.query.artist as Artist | undefined;

  switch (req.method) {
    case "GET":
      const listId = artist
        ? artist === "hatohui"
          ? HATO_FINISHED_LIST_ID
          : ZAGVANDR_LIST_ID
        : null;

      if (!listId) {
        return res.status(404).json({ message: "List Id Missing" });
      }

      const cards = await getTrelloCardsByListId(listId);

      if (!cards) {
        return res.status(404).json({ message: "No card Found" });
      }

      const formattedCards: TrelloCardDTO[] = cards
        .filter((card) => !card.isTemplate)
        .map((card) => ({
          id: card.id,
          name: card.name,
          desciption: card.desc,
          completed: card.dueComplete,
          lastActivity: format(new Date(card.dateLastActivity), "dd-MM-yyyy"),
          due: card.due ? format(new Date(card.due), "dd-MM-yyyy") : null,
          paid:
            card.labels.find((label) => label.name === "Paid") !== undefined,
          status: getCardStatus(card.checkItemStates),
          images: card.cover.scaled,
          checkItems: card.checklists,
        }));

      const toReturn: GetTrelloCardByListName = {
        artist: artist ?? "",
        cards: formattedCards,
      };

      return res.status(200).json(toReturn);
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default withErrorHandler(handler);
