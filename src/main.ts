console.log("Hello, World!");

async function getRandomQuote(): Promise<string> {
    const res = await fetch("data/quotes.json");
    const quotes = await res.json() as string[];
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index]!;
}

addEventListener("DOMContentLoaded", async () => {
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

    const quote = document.getElementById("quote")!;
    const random = await getRandomQuote();
    quote.textContent = quote.textContent.replace("くぉーと", random);
});
