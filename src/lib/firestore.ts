import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

export async function getProjects(): Promise<Project[]> {
  const querySnapshot = await getDocs(collection(db, "projects"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Project[];
}