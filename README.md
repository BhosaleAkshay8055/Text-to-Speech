# 📚 Book to Speech Converter

Convert full book text into natural-sounding audio using ElevenLabs Text-to-Speech API.

This script reads a `.txt` book file, splits it into chunks, generates speech for each chunk, and saves MP3 audio files locally.

---

## 🚀 Features

* ✅ High-quality human-like voice
* ✅ Automatic book chunking
* ✅ Node.js based automation
* ✅ Environment variable security
* ✅ Works for long books
* ✅ Easy to extend for merging audio

---

## 🧱 Project Structure

```
project/
│
├── book.txt          # Your input book text
├── textToSpeech.js          # Main script
├── .env              # API key (not committed)
├── package.json
└── output audio_*.mp3
```

---

## 📋 Prerequisites

Make sure you have:

* Node.js (v16 or higher recommended)
* ElevenLabs account
* ElevenLabs API key
* Internet connection

---

## 🔑 Step 1 — Get ElevenLabs API Key

1. Login to ElevenLabs
2. Go to **Developers → API Keys**
3. Click **Create API Key**
4. Copy the key

It will look like:

```
sk_xxxxxxxxxxxxxxxxx
```

---

## ⚙️ Step 2 — Install Dependencies

Run in project folder:

```bash
npm install axios dotenv
```

---

## 🔐 Step 3 — Configure Environment Variables

Create a `.env` file in the root:

```
API_KEY=sk_your_real_key_here
```

⚠️ **Important:** Never commit `.env` to Git.

---

## 📖 Step 4 — Prepare Your Book

Place your book text in:

```
book.txt
```

### ✅ Recommended formatting

* Remove page numbers
* Remove headers/footers
* Keep proper paragraphs
* Use UTF-8 encoding

---

## ▶️ Step 5 — Run the Script

```bash
node textToSpeech.js
```

You will see:

```
Processing chunk 1/XX
Processing chunk 2/XX
...
✅ Book converted!
```

---

## 📦 Output

Audio files will be generated as:

```
audio_0.mp3
audio_1.mp3
audio_2.mp3
...
```

Each file corresponds to one chunk of the book.

---

## 🔧 Configuration

### Change Voice

Update in code:

```js
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL";
```

You can find voice IDs inside ElevenLabs dashboard.

---

### Change Chunk Size

Current:

```js
const chunks = bookText.match(/.{1,2500}/gs);
```

Recommended range:

* 2000–3000 characters per chunk

---

## ⚠️ Important Notes

* Do not exceed ElevenLabs rate limits
* Very large books may take time
* Ensure your API key has enough credits
* Only convert books you have rights to

---

## 🚀 Recommended Improvements (Optional)

You may enhance this project by adding:

* 🔄 Parallel processing for speed
* 🎧 Auto merge into single MP3
* 📚 Chapter-wise splitting
* ☁️ Upload to S3
* 🎙️ Voice settings control

---

## 🐛 Troubleshooting

### ❌ 401 Unauthorized

**Cause:** Invalid or missing API key

**Fix:** Check `.env` and restart script

---

### ❌ Empty audio files

**Cause:** Text chunk may be empty

**Fix:** Clean book formatting

---

### ❌ Too slow

**Cause:** Sequential processing

**Fix:** Implement parallel requests (advanced)

---

## 📜 License

Use responsibly and ensure you have rights to convert the source text.

---

## 🙌 Acknowledgement

Powered by ElevenLabs Text-to-Speech API.
