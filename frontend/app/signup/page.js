"use client";
import { useState } from "react";
import { API } from "@/lib/api";

export default function Signup() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await fetch(`${API}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("User created");
  };

  return (
    <div className="p-10">
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})} />

      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}