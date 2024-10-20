// Import messageService
const messageService = require('./messageService');

// Generate and display a random message
const randomMessage = messageService.generateRandomMessage();
console.log(randomMessage);
