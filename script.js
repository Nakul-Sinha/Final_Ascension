// script.js

// Change these to your desired values:
// CHECK_KEY = the key the user must enter (key1).
// REVEAL_KEY = the key you want to show after a correct match (key2).
const CHECK_KEY  = "A0S22MergeKey";    // <-- key1 (what the site checks)
const REVEAL_KEY = "Sequence0Ascend";  // <-- key2 (what the site displays on success)

document.addEventListener("DOMContentLoaded", () => {
  const inputEl  = document.getElementById("keyInput");
  const btn      = document.getElementById("checkBtn");
  const resultEl = document.getElementById("result");

  function checkKey() {
    const userVal = (inputEl.value || "").trim();

    if (userVal === CHECK_KEY) {
      resultEl.className = "success";
      // exact success message you requested — reveals key2 (REVEAL_KEY)
      resultEl.textContent = `placeholder(true) stateent, will change it later, KEY: ${REVEAL_KEY}`;
    } else {
      resultEl.className = "error";
      resultEl.textContent =
        "It seems while creating the Key to final ascension one of the shards corrupted the key, try a different way to create the key";
    }
  }

  btn.addEventListener("click", checkKey);
  inputEl.addE
