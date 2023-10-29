// firebaseからデータを取得する
import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
  documentId
} from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfB9sTFUsq5F31kv4ApcVR8lGKrm5iFrA",
  authDomain: "pf-nishikawa.firebaseapp.com",
  projectId: "pf-nishikawa",
  storageBucket: "pf-nishikawa.appspot.com",
  messagingSenderId: "767853691437",
  appId: "1:767853691437:web:bb97bd912e2d9144af6ea4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const articlesRef = collection(db, 'articles');

const fetchArticlesWithDocumentID = async () => {
  try {

    const querySnapshot = await getDocs(articlesRef);

    const articlesWithID = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return articlesWithID;
  } catch (error) {
    console.error('Error fetching articles with document ID:', error);
    throw error;
  }
};

const fetchArticlesById = async (id) => {

  const q = await getDocs(query(articlesRef, where(documentId(), "==", id)));

  const articlesWithID = q.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return articlesWithID[0];
}

export {fetchArticlesWithDocumentID, fetchArticlesById} ;

export const auth = getAuth(app);