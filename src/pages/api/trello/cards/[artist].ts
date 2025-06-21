import {
  HATO_QUEUE_LIST_ID,
  ZAGVANDR_LIST_ID,
} from "@/constants/server/trello";
import { Artist } from "@/Interfaces/Artist";
import { withErrorHandler } from "@/lib/server";
import { getTrelloCardsByListId } from "@/services/server/trello/TrelloCardService";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const artist = req.query.artist as Artist | undefined;

  switch (req.method) {
    case "GET":
      const listId = artist
        ? artist === "hatohui"
          ? HATO_QUEUE_LIST_ID
          : ZAGVANDR_LIST_ID
        : null;

      if (!listId) {
        return res.status(404).json({ message: "List Id Missing" });
      }

      const cards = await getTrelloCardsByListId(listId);

      if (!cards) {
        return res.status(404).json({ message: "No card Found" });
      }

      return res.status(200).json({ artist, cards });
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default withErrorHandler(handler);
