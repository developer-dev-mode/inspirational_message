// Import quotes, authors, and categories from messages.js
const { quotes, authors, categories } = require('../data/messages');

// Function to get a random element from an array
const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const generateRandomMessage = () => {
    // Generate a single random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Use the same random index for quote, author, and category
    const quote = quotes[randomIndex];
    const author = authors[randomIndex];
    const category = categories[randomIndex];

    return `"${quote}" - ${author} [${category}]`;
};



// Export the generateRandomMessage function
module.exports = { generateRandomMessage };
