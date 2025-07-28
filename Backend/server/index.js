import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    console.log("🚫 No prompt received");
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);


    const text = await result.response.text();
    console.log("✅ Gemini response text:", text);
    res.json({ text });
  } catch (err) {
    console.error("❌ Gemini API Error:", err?.message || err);
    res.status(500).json({ error: err?.message || "Internal Server Error" });
  }
});


app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
