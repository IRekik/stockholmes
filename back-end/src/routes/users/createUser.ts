import express, { Request, Response } from "express";
import knexInstance from "../../utils/user_db";
import { RegistrationFields } from "../../../../common/types/fields";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body as RegistrationFields;

  try {
    const insertedId = await knexInstance("users").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      salt: "placeholder",
      is_SU: true
    });

    console.log(`Inserted user with ID: ${insertedId[0]}`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
