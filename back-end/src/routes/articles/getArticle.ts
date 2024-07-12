import express from "express";
import knexInstance from "../../utils/db";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      console.log(
        "Error retrieving post from the database: The request does not include an ID"
      );
      return res
        .status(404)
        .json({ error: "The request does not include an ID" });
    }

    // Fetch the post from the database using knex
    const post = await knexInstance("articles")
      .where("id", id)
      .first();

    if (!post) {
      console.log("Article not found:", id);
      return res.status(404).json({ error: "Article not found" });
    }

    console.log("Article retrieved from the database:", post);
    return res.json(post);
  } catch (error) {
    console.error("Error retrieving article from the database:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;