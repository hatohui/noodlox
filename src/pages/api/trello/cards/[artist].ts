import { HATO_QUEUE_LIST_ID } from "@/constants/server/trello";
import { getTrelloCardsByListId } from "@/services/server/trello/TrelloCardService";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { artist } = req.query;

  try {
    switch (req.method) {
      case "GET":
        if (!HATO_QUEUE_LIST_ID)
          throw new Error("HATO_QUEUE_LIST_ID is not defined");

        const cards = await getTrelloCardsByListId(HATO_QUEUE_LIST_ID);

        if (!cards) {
          res.status(404).json({ message: "No card Found" });
        }

        res.status(200).json({ artist, cards });
        break;

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
