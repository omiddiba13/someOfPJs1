const quotes = [
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  "Strive not to be a success, but rather to be of value.",
  "The mind is everything. What you think you become.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Be yourself; everyone else is already taken.",
  "hello there ",
  "good morning",
];
const usedIndexes = new Set();
const quotesElement = document.getElementById("quote");

function generatorQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIdx)) continue;
    const quotess = quotes[randomIdx];
    quotesElement.innerHTML = quotess;
    usedIndexes.add(randomIdx);
    console.log(quotesElement);
    break;
  }
}
