import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.register = async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value);
  msg.innerText = "تم التسجيل";
};

window.login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
  window.location.href = "dashboard.html";
};