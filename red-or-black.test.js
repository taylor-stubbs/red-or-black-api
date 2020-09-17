const { guessColour, getNewGame, flipCard } = require('./red-or-black')

test('Guess black', () => {
  // Arrange
  const guess = 'black'
  const state = getNewGame()
  // Act
  const newState = guessColour(guess, state)
  // Assert
  expect(newState.currentGuess).toBe(guess)
})

test('Guess red', () => {
  // Arrange
  const guess = 'red'
  const state = getNewGame()
  // Act
  const newState = guessColour(guess, state)
  // Assert
  expect(newState.currentGuess).toBe(guess)
})

test('Guess other colour', () => {
  // Arrange
  const guess = 'blue'
  const state = getNewGame()

  // Act & Assert
  //For synchronous functions
  expect(() => {
    const newState = guessColour(guess, state)
  }).toThrow('Should guess colour red or black!')
})

// Flip Card is an Asynchronous function which returns a reject rather than throwing an js Error object when it fails.
test('No guess when card flipped', async () => {
  // Arrange
  const state = getNewGame()

  const newState = flipCard(state)

  // Act & Assert
  await expect(flipCard(state)).rejects.toEqual(new Error('You need to guess before you flip!'))  
})

// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true





//card['suit'] === 'HEARTS' || card['suit'] === 'DIAMONDS'))

test('a valid guess', async () =>  {

  const myMock = jest.fn()
  myMock.mockReturnValueOnce("CLUBS");

  
  //Arrange
  const state = getNewGame();
  const guess = 'black';

  const newState = guessColour(guess, state)
  
  .mockResolvedValue()


})
