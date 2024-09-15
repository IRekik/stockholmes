import express, { Request, Response } from "express";
import knexInstance from "../../utils/db/user_db";
import { UserWithoutSensitiveInfo } from "../../../../common/types/userDBTables";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { email } = req.query;

  try {
    if (!email) {
      return res.status(400).json({ error: "Request is missing email field" });
    }

    const user = await knexInstance("users")
      .where("email", email)
      .first() as UserWithoutSensitiveInfo;

    if (!user) {
      console.log(`The account with ${email} does not exist yet`);
      return res.status(201).json({ message: "User does not exist" });
    } else {
      console.log(`User with ${email} already exists`);
      return res.status(409).json({ message: "User already exists" });
    }

  } catch (error) {
    console.error("Error checking existence of user account:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
