// stored key (change this to whichever key you want the site to accept)
// NOTE: matching is case-sensitive. To make it case-insensitive, compare lowercased values.
const STORED_KEY = "A0S22MergeKey"; // ← change to your chosen key

const inputEl  = document.getElementById("keyInput");
const btn      = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

function checkKey() {
  const userVal = inputEl.value.trim(); // trim whitespace
  if (userVal === STORED_KEY) {
    // exact success message you asked for (keeps the text exactly as requested)
    resultEl.className = "success";
    resultEl.textContent = `placeholder(true) stateent, will change it later, KEY: ${STORED_KEY}`;
  } else {
    resultEl.className = "error";
    resultEl.textContent = "It seems while creating the Key to final ascension one of the shards corrupted the key, try a different way to create the key";
  }
}

// click and Enter support
btn.addEventListener("click", checkKey);
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkKey();
});
