// src/messageService.test.js

const { quotes, authors, categories } = require('../data/messages') // Correct the path to the messages file
const messageService = require('../src/messageService') // Correct the path to the messageService

describe('Message Service', () => {
  test('generateRandomMessage should return a valid message', () => {
    const message = messageService.generateRandomMessage()

    // Check that the message format is correct
    expect(message).toMatch(/".+" - .+ \[.+\]/)

    // Extract quote, author, and category from the message
    const parts = message.match(/"(.*?)" - (.*?) \[(.*?)\]/)
    const quote = parts[1]
    const author = parts[2]
    const category = parts[3]

    // Check that the quote, author, and category are valid
    const quoteIndex = quotes.indexOf(quote)
    const authorIndex = authors.indexOf(author)
    const categoryIndex = categories.indexOf(category)

    expect(quoteIndex).toBeGreaterThanOrEqual(0) // Quote should exist
    expect(authorIndex).toBeGreaterThanOrEqual(0) // Author should exist
    expect(categoryIndex).toBeGreaterThanOrEqual(0) // Category should exist
    expect(quoteIndex).toBe(authorIndex) // Ensure quote and author match
    expect(quoteIndex).toBe(categoryIndex) // Ensure quote and category match
  })
})
