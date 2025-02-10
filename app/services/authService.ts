import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google girişi başarısız:", error);
    throw error;
  }
};

