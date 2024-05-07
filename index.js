const quotes = [
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only thing we have to fear is fear itself.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Be yourself; everyone else is already taken.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "Do not go where the path may lead; go instead where there is no path and leave a trail.",
  "If you want to live a happy life, tie it to a goal, not to people or things."
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIdx)) { continue; }
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }

}