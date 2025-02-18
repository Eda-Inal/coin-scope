import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account", // Bu parametre her seferinde e-posta seçme ekranını gösterir.
  });

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user
    localStorage.setItem("user", JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }));
    return user;
  } catch (error) {
    console.error("Google authentication fail:", error);
    throw error;
  }
};
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem("user", JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }));
    return  user;
  } catch (error) {
    console.error("Sign-up failed:", error);
    throw error;
  }
};
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Sign-in failed:", error);
    throw error;
  }
};
