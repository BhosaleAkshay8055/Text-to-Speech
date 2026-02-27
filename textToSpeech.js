const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // example voice

async function textToSpeech(text, index) {
  const response = await axios({
    method: "POST",
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      "xi-api-key": API_KEY,
      "Content-Type": "application/json"
    },
    responseType: "arraybuffer",
    data: {
      text: text,
      model_id: "eleven_multilingual_v2"
    }
  });

  fs.writeFileSync(`audio_${index}.mp3`, response.data);
}

// ===== MAIN =====
async function processBook() {
  const bookText = fs.readFileSync("book.txt", "utf8");

  const chunks = bookText.match(/.{1,2500}/gs); // split into chunks

  for (let i = 0; i < chunks.length; i++) {
    console.log(`Processing chunk ${i + 1}/${chunks.length}`);
    await textToSpeech(chunks[i], i);
  }

  console.log("✅ Book converted!");
}

processBook();