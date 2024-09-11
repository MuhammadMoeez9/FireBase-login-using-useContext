import { auth } from "./Firebase";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

export const doCreatUserWithEmailAndPassword = async (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);

};


export const doSignInWithEmailAndPassword = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);

};


export const doSignInWithGoogle = async () => {
   const provider = new GoogleAuthProvider();
   const result = await signInWithPopup(auth, provider);
   //result.user
   return result
};

export const doSignOut = () => {
   return auth.signOut();
};

// export const doPasswordReset = (email) => {
//  return sendPasswordResetEmail(auth, email);
//};

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, email);
// };

// export const doSendEmailVerfication = () => {
//   return sendEmailVerfication(auth.currentUser, {
//      url:`${window.location.origin}/home`,
//   });
//};
