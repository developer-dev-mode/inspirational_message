### **Message Generator Project Design Plan: Random Inspiring Quotes**


### **1. Project Overview**

#### **Objective**

Createing a Node.js application that generates random messages. Every time the program runs, the user should receive a new, randomized message composed of at least three different pieces of data, in my case it will be an inspiring quote, author, and category.

#### **Main Features**

- Randomly select a quote or message from predefined lists.
- Include multiple pieces of data to form a complete message (e.g., quote, author, and category or context).
- Allow for different themes (e.g., motivational, success, humor, astrology, or custom jokes).
- Each output message should be unique based on the combination of different data pieces.


### **2. Application Flow**

1. **User Interaction**: The user runs the application from the command line using Node.js.
2. **Input Handling**: The program takes no user input (though optional features can be added later).
3. **Message Generation**:
   - The program randomly selects three pieces of data (e.g., the quote, the author, and an additional context such as a category or motivational tagline).
4. **Display Output**: The program outputs a randomized message in the terminal, made up of these three elements.

---

### **3. Data Structure**

Store the different pieces of data (quotes, authors, categories, or contexts) in arrays or objects, I will be using nested objects in.

**Example Data Structure**:

```javascript
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
```

You can later add more elements like **astrological signs**, **nonsensical phrases**, or **funny jokes** based on your theme.

---

### **4. File Structure**

```bash
message-generator/
│
├── src/
│   ├── index.js            # Main application logic
│   ├── messageService.js    # Logic for creating randomized messages
├── data/
│   └── messages.js         # Contains arrays of quotes, authors, categories
├── test/
│   └── messageService.test.js # Unit tests for message generation
├── package.json            # Node project configuration
└── README.md               # Project documentation
```

---

### **5. Logic Design**

**Main Logic (`index.js`)**:

- Import data from `messages.js`.
- Randomly select a quote, author, and category.
- Format them into a cohesive message and display it in the terminal.

**Message Service (`messageService.js`)**:

- Provide functions to get a random quote, author, and category.
- Combine these pieces of data into one message and return it to be displayed.

### **Example Code**

**index.js**:

```javascript
const messageService = require('./messageService');

// Generate and display a random message
const randomMessage = messageService.generateRandomMessage();
console.log(randomMessage);
```

**messageService.js**:

```javascript
const { quotes, authors, categories } = require('../data/messages');

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generateRandomMessage = () => {
  const quote = getRandomElement(quotes);
  const author = getRandomElement(authors);
  const category = getRandomElement(categories);

  return `"${quote}" - ${author} [${category}]`;
};

module.exports = { generateRandomMessage };
```

**messages.js**:

```javascript
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

module.exports = { quotes, authors, categories };
```

---

### **6. Additional Features (Optional)**

- **Themes**: Allow the user to select a theme (e.g., motivational, humorous) by passing a command-line argument.
- **External API Integration**: Fetch quotes dynamically from an API (e.g., [Quotes API](https://zenquotes.io/)).
- **Multiple Quotes**: Allow the user to generate multiple quotes at once.

**Example Optional CLI Handler:**

```javascript
const yargs = require('yargs');

const options = yargs
  .option('count', {
    alias: 'n',
    description: 'Number of quotes to display',
    type: 'number'
  })
  .help()
  .alias('help', 'h')
  .argv;

// If user specifies a count, generate multiple messages
for (let i = 0; i < (options.count || 1); i++) {
  console.log(messageService.generateRandomMessage());
}
```

---

### **7. Testing**

Write unit tests for your message generation logic.

**messageService.test.js**:

```javascript
const { generateRandomMessage } = require('../src/messageService');

test('generateRandomMessage returns a formatted message', () => {
  const message = generateRandomMessage();
  expect(message).toContain('"');  // Check for quote format
  expect(message).toContain('-');  // Check for author
  expect(message).toContain('[');  // Check for category
});
```

---
