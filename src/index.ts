console.log("Hello, World!");

addEventListener("DOMContentLoaded", () => {
    const headerButton = document.getElementById("header-button")!;

    headerButton.addEventListener("click", () => {
        const dropdown = document.getElementById("dropdown")!;

        if (dropdown.style.maxHeight.length === 0) {
            // 閉じてるとき -> 開く
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            headerButton.textContent = "×"
        }
        else {
            // 開いてるとき -> 閉じる
            dropdown.style.maxHeight = "";
            headerButton.textContent = "≡"
        }
    });
});
