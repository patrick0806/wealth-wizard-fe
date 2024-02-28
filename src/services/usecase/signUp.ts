import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
}
