// Define an array of quotes
const quotes = [
  "The journey of a thousand miles begins with one step.",
  "What you do today can improve all your tomorrows.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don't watch the clock; do what it does. Keep going.",
  "You don't have to be great to start, but you have to start to be great."
];

// Define an array of authors, aligned by index with the quotes
const authors = [
  "Lao Tzu",
  "Ralph Marston",
  "Henry David Thoreau",
  "Sam Levenson",
  "Zig Ziglar"
];

// Define an array of categories, aligned by index with the quotes and authors
const categories = [
  "Wisdom",
  "Motivation",
  "Success",
  "Perseverance",
  "Inspiration"
];

// Function to get a random element by index
const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Function to generate a random message
const generateRandomMessage = () => {
  // Get the same random index for quote, author, and category
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quote = quotes[randomIndex];
  const author = authors[randomIndex];
  const category = categories[randomIndex];

  // Return the formatted message
  return `"${quote}" - ${author} [${category}]`;
};

// Export the generateRandomMessage function
module.exports = { generateRandomMessage };
