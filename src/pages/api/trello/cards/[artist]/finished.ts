import {
  HATO_FINISHED_LIST_ID,
  ZAGVANDR_LIST_ID,
} from "@/constants/server/trello";
import { Artist } from "@/Interfaces/Artist";
import { withErrorHandler } from "@/lib/server";
import { getTrelloCardsByListId } from "@/services/server/trello/TrelloCardService";
import { NextApiHandler } from "next";

/**
 * Handles incoming requests for Trello cards of a finished list.
 *
 * If the request method is GET, it queries the Trello API for the cards
 * of the finished list of the specified artist. If the artist is not
 * specified, it returns a 404 response. If the artist is specified but
 * the list is not found, it returns a 404 response. If the list is found,
 * it returns a 200 response with the artist and the cards.
 *
 * If the request method is not GET, it returns a 405 response.
 */
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

      return res.status(200).json({ artist, cards });
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default withErrorHandler(handler);
