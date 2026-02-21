// src/index.ts
console.log("Hello, World!");
addEventListener("DOMContentLoaded", () => {
  const headerButton = document.getElementById("header-button");
  headerButton.addEventListener("click", () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.maxHeight.length === 0) {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      headerButton.textContent = "×";
    } else {
      dropdown.style.maxHeight = "";
      headerButton.textContent = "≡";
    }
  });
});
