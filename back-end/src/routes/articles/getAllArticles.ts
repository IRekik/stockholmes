import express from "express";
import knexInstance from "../../utils/db";
import { Article } from "../../types/db/types";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Query the database
    const result: Article[] = await knexInstance("articles")
      .select("*")
      .orderBy("creation_date", "desc");

    if (result.length === 0) {
      throw new Error("No data found");
    }

    console.log("All articles retrieved from the database:", result);
    res.json(result);
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;