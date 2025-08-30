// script.js

// Keys:
// CHECK_KEY = the key the user must enter (key1).
// REVEAL_KEY = the key you want to show after a correct match (key2).
const CHECK_KEY  = "A0S22MergeKey";    // <-- key1
const REVEAL_KEY = "Sequence0Ascend";  // <-- key2

document.addEventListener("DOMContentLoaded", () => {
  const inputEl  = document.getElementById("keyInput");
  const btn      = document.getElementById("checkBtn");
  const resultEl = document.getElementById("result");

  function checkKey() {
    const userVal = (inputEl.value || "").trim();

    if (userVal === CHECK_KEY) {
      resultEl.className = "success";
      resultEl.textContent = `placeholder(true) statement, will change it later, KEY: ${REVEAL_KEY}`;
    } else {
      resultEl.className = "error";
      resultEl.textContent =
        "It seems while creating the Key to final ascension one of the shards corrupted the key, try a different way to create the key";
    }
  }

  // Trigger check on button click
  btn.addEventListener("click", checkKey);

  // Allow pressing Enter in the input field to trigger check too
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      checkKey();
    }
  });
});
