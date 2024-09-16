import express, { Request, Response } from "express";
import knexInstance from "../../utils/db/user_db";
import { AuthenticationFields } from "../../../../common/types/fields";
import bcrypt from "bcryptjs"
import { User } from "../../../../common/types/userDBTables";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body as AuthenticationFields;

  try {
    // Check if the user exists in the database
    const user = await knexInstance("users")
      .where({ email })
      .first() as User;

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Authentication successful", user });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;