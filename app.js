import { auth, db } from "./firebase.js";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.logout = () => signOut(auth);

window.addAsset = async () => {
  await addDoc(collection(db, "assets"), {
    name: assetName.value,
    code: assetCode.value
  });

  load();
};

async function load() {
  const snap = await getDocs(collection(db, "assets"));

  let rows = "";

  snap.forEach(d => {
    rows += `
      <tr>
        <td>${d.data().name}</td>
        <td>${d.data().code}</td>
        <td><button onclick="del('${d.id}')">حذف</button></td>
      </tr>
    `;
  });

  table.innerHTML = rows;
}

window.del = async (id) => {
  await deleteDoc(doc(db, "assets", id));
  load();
};

load();