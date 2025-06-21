import type { NextApiHandler } from "next";

export const withErrorHandler = (handler: NextApiHandler): NextApiHandler => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
