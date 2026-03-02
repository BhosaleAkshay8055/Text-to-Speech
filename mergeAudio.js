const fs = require("fs");
const { execSync } = require("child_process");

// ===== SETTINGS =====
const OUTPUT_FILE = "final_output.mp3";

// read all mp3 files starting with audio_news
const files = fs
  .readdirSync(".")
  .filter(f => /^audio_news\d+\.mp3$/.test(f))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

if (files.length === 0) {
  console.log("❌ No mp3 files found");
  process.exit(1);
}

console.log("🎧 Files to merge:", files);

// create ffmpeg list file
const listContent = files.map(f => `file '${f}'`).join("\n");
fs.writeFileSync("filelist.txt", listContent);

// run ffmpeg concat
try {
execSync(
  `ffmpeg -f concat -safe 0 -i filelist.txt -acodec libmp3lame -b:a 128k ${OUTPUT_FILE}`,
  { stdio: "inherit" }
);

  console.log("✅ Merged successfully →", OUTPUT_FILE);
} catch (err) {
  console.error("❌ ffmpeg merge failed:", err.message);
}