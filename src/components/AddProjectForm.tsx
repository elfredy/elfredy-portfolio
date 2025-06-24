"use client";

import { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), {
        title,
        description,
        url,
        image,
      });
      alert("Proje eklendi!");
      setTitle("");
      setDescription("");
      setUrl("");
      setImage("");
    } catch (error) {
      console.error("Proje ekleme hatası: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="border p-2 rounded"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Açıklama"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Proje Ekle
      </button>
    </form>
  );
}
