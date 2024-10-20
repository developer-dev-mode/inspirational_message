


// - [ ] Import `messageService.js` in `index.js`:
const messageService = require('./src/messageService');

// - [ ] Generate and display a random message using `generateRandomMessage()`:
const randomMessage = messageService.generateRandomMessage();
console.log(randomMessage);

// ### **2. Message Service (`messageService.js`)**
// - [ ] Import `quotes`, `authors`, and `categories` from `messages.js`:
const { quotes, authors, categories } = require('./data/messages');

// - [ ] Create a `getRandomElement()` function to select a random element from an array:
const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// - [ ] Create the `generateRandomMessage()` function:
const generateRandomMessage = () => {
  const quote = getRandomElement(quotes);
  const author = getRandomElement(authors);
  const category = getRandomElement(categories);

  // - [ ] Return the formatted message: `"quote" - author [category]`
  return `"${quote}" - ${author} [${category}]`;
};

// - [ ] Export `generateRandomMessage`:
module.exports = { generateRandomMessage };

// ### **3. Messages Data (`messages.js`)**
// - [ ] Define the array of `quotes`, `authors`, and `categories`:
const quotes = [
  "Believe in yourself!",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

const authors = [
  "Unknown",
  "Chinese Proverb",
  "Winston Churchill"
];

const categories = [
  "Motivation",
  "Inspiration",
  "Success"
];

// - [ ] Export `quotes`, `authors`, and `categories`:
module.exports = { quotes, authors, categories };

// ### **Final Step: Run the Project**
// Once you have the code set up:

// 1. Run the project in your terminal:
// node index.js

// 2. Test your results to see random messages printed to the console.
