"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Client Growth AI</h1>

      <input
        placeholder="Enter idea (e.g. Gym promotion)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <button onClick={generate}>Generate</button>

      <p style={{ marginTop: 20 }}>{result}</p>
    </div>
  );
}