// script.js

document.addEventListener("DOMContentLoaded", () => {
  const inputEl  = document.getElementById("keyInput");
  const btn      = document.getElementById("checkBtn");
  const resultEl = document.getElementById("result");

  async function checkKey() {
    const userVal = (inputEl.value || "").trim();
    if (!userVal) return;

    try {
      // Call the backend API to verify the key
      const response = await fetch(`/api/check?key=${encodeURIComponent(userVal)}`);
      const data = await response.json();

      if (data.success) {
        resultEl.className = "success";
        resultEl.textContent = 
          `O Great Beyonder, you have achieved what was once thought impossible. 
          By merging the twenty-two divine pathways, you now hold the Key to a power 
          that rivals the very Creator. Step forth, claim the throne, and let the realms 
          bear witness to your ascension. KEY: ${data.reveal}`;
      } else {
        resultEl.className = "error";
        resultEl.textContent =
          "It seems while creating the Key to final ascension one of the shards corrupted the key, try a different way to create the key";
      }
    } catch (err) {
      resultEl.className = "error";
      resultEl.textContent = "Something went wrong. Please try again.";
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
