import { auth } from "firebase";

export async function signOut(callback: (err?: Error) => void): Promise<void> {
  return auth()
    .signOut()
    .then(() => {
      callback();
    })
    .catch((err: Error) => {
      callback(err);
    });
}
