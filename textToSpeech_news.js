const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL";

async function textToSpeech(text, index) {
  try {
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
        model_id: "eleven_multilingual_v2",
        output_format: "pcm_44100",
        voice_settings: {
          stability: 0.30,
          similarity_boost: 0.85,
          style: 0.40,
          use_speaker_boost: true
        }
      }
    });

    fs.writeFileSync(`audio_news${index}.wav`, response.data);
    console.log(`✅ Saved audio_news${index}.wav`);
  } catch (err) {
    console.error("❌ TTS Error:", err.response?.data || err.message);
  }
}

// ===== MAIN =====
async function processBook() {
  const bookText = fs.readFileSync("news.txt", "utf8");
  const chunks = bookText.match(/.{1,2500}/gs);

  for (let i = 0; i < chunks.length; i++) {
    console.log(`Processing chunk ${i + 1}/${chunks.length}`);
    await textToSpeech(chunks[i], i);
  }

  console.log("✅ Book converted!");
}

processBook();