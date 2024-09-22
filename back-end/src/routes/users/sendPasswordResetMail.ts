import express, { Request, Response } from "express";
import sendgrid from '@sendgrid/mail';
import { ResetPasswordFields } from "../../../../common/types/fields";
import { randomBytes } from 'crypto';
import knexInstance from "../../utils/db/user_db";
import { User } from "../../../../common/types/userDBTables";



const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { email } = req.body as ResetPasswordFields;
  
  try {
    const user = await knexInstance("users")
    .where("email", email)
    .first() as User;
    const userID = user.id;

    const token = randomBytes(32).toString('hex');

    const inserted = await knexInstance("users").insert({
      user_id: userID,
      token: token
    });

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    const resetUrl = `http://localhost:3000/reset_password/${token}`;

    const msg = {
      to: email,
      from: 'krissdebanane@gmail.com',
      subject: 'Password Reset Request',
      html: `
        <p>Hi,</p>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset your password</a>
        <p>If you didn’t request this, you can safely ignore this email.</p>
      `,
    };
  }
  catch (error) {

  }
});

export default router;
