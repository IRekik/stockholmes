import { ROUTES } from "../../../common/constants/routePaths"; 
import { RegistrationFieldsUsed } from "../../../common/types/fields";

export const createUser = async (userData: RegistrationFieldsUsed) => {
  const res = await fetch(`${process.env.SERVER}${ROUTES.api.users.createUser}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data;
};