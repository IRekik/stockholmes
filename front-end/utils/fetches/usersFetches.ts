import { ROUTES } from "../../../common/constants/routePaths"; 
import { AuthenticationFields, RegistrationFieldsUsed, ResetPasswordFields } from "../../../common/types/fields";
import bcrypt from "bcryptjs"

export const createUser = async (userData: RegistrationFieldsUsed) => {
  if (!process.env.SALT_ROUNDS) {
    throw new Error("Environment variable not loaded");
  }
  
  const hashedPassword = await bcrypt.hash(userData.password, parseInt(process.env.SALT_ROUNDS, 10));
  userData.password = hashedPassword;

  const res = await fetch(`${process.env.SERVER}${ROUTES.api.users.createUser}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error(await res.text());
  return res;
};

export const authenticateUser = async (userData: AuthenticationFields) => {
  const res = await fetch(`${process.env.SERVER}${ROUTES.api.users.authenticateUser}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  
  return res;
};

export const checkExistence = async (email: string) => {
  const res = await fetch(`${process.env.SERVER}${ROUTES.api.users.checkExistence}?email=${encodeURIComponent(email)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return res;
};

export const sendPasswordResetMail = async (userData: ResetPasswordFields) => {
  const res = await fetch(`${process.env.SERVER}${ROUTES.api.users.sendPasswordResetMail}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)
  });
  
  return res;
};