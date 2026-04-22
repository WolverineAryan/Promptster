"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";

export default function Home() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch(`${API}/prompts`)
      .then(res => res.json())
      .then(data => setPrompts(data));
  }, []);

  const likePrompt = async (id) => {
    await fetch(`${API}/prompts/${id}/like`, { method: "POST" });
    location.reload();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">PromptHub</h1>

      {prompts.map(p => (
        <div key={p._id} className="border p-4 mt-4 rounded">
          <h3 className="font-semibold">{p.title}</h3>
          <p>{p.description}</p>

          <button onClick={() => likePrompt(p._id)}>
            ❤️ {p.likes}
          </button>
        </div>
      ))}
    </div>
  );
}