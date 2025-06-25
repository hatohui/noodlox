import { TrelloCardDTO } from "@/Interfaces/TrelloCardAPIType";
import { getCardStatus } from "@/lib/getCardStatus";
import { getListIdFromArtist } from "@/lib/getListIdFromArtist";
import { getTrelloCardbyId } from "@/services/server/trello/TrelloCardService";
import { format } from "date-fns";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { artist, id } = req.query;

  switch (req.method) {
    case "GET":
      const listId = getListIdFromArtist("finished", artist as string);

      if (!listId) {
        return res.status(404).json({ message: "List Id Missing" });
      }

      const card = await getTrelloCardbyId(id as string);

      if (!card) return res.status(404).json({ message: "No card Found" });

      const formattedCard: TrelloCardDTO = {
        id: card.id,
        name: card.name,
        desciption: card.desc,
        completed: card.dueComplete,
        lastActivity: format(new Date(card.dateLastActivity), "dd-MM-yyyy"),
        due: card.due ? format(new Date(card.due), "dd-MM-yyyy") : null,
        paid: card.labels.find((label) => label.name === "Paid") !== undefined,
        status: getCardStatus(card.checkItemStates),
        images: card.cover.scaled,
        checkItems: card.checklists,
      };

      return res.status(200).json(formattedCard);
    default: {
      return res.status(405).json({ message: "Method not allowed" });
    }
  }
};

export default handler;
