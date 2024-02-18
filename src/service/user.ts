import { User } from "@/types/user";
import { api } from "./api";

type SaveUserData = {
  name: string;
  email: string;
  password: string;
};
export async function saveUser(userData: SaveUserData): Promise<User> {
  return api.post("/users", userData);
}
