import { BASE_TRELLO_URL, HATO_QUEUE_LIST_ID } from "@/constants/server/trello";
import { NextApiHandler } from "next";

const query = `${BASE_TRELLO_URL}/lists/${HATO_QUEUE_LIST_ID}/cards`;

const handler: NextApiHandler = (req, res) => {
  const { artist, id } = req.query;

  res.status(200).json({ artist, id });
};

export default handler;
