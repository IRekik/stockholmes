import express, { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import knexInstance from "../../utils/db/user_db";
import { RegistrationFields } from "../../../../common/types/fields";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body as RegistrationFields;

  try {
    if (!process.env.SALT_ROUNDS) {
      throw new Error("Environment variable not loaded");
    }

    const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const insertedId = await knexInstance("users").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
      salt,
      is_SU: true,
    });

    console.log(`Inserted user with ID: ${insertedId[0]}`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
