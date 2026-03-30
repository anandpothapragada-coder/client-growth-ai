"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [business, setBusiness] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("Professional");
  const [result, setResult] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({
        prompt,
        business,
        platform,
        tone,
      }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🚀 Client Growth AI</h1>

      <input
        placeholder="Enter idea (e.g. Offer for new members)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Business type (Gym, Salon...)"
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
      />

      <br /><br />

      <select onChange={(e) => setPlatform(e.target.value)}>
        <option>Instagram</option>
        <option>Facebook</option>
        <option>LinkedIn</option>
      </select>

      <br /><br />

      <select onChange={(e) => setTone(e.target.value)}>
        <option>Professional</option>
        <option>Friendly</option>
        <option>Aggressive</option>
      </select>

      <br /><br />

      <button onClick={generate}>Generate</button>

      <pre style={{ marginTop: 20 }}>{result}</pre>
    </div>
  );
}