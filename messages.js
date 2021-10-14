const inspoMessage1 = 'Life is what happens to you while you\'re busy making other plans.'
const inspoMessage2 = 'Happiness is wanting what you have, not having what you want.'
const inspoMessage3 = 'You can\'t always get what you want. But if you try sometimes, well, you just might find you get what you need '

const messageArray = [inspoMessage1, inspoMessage2, inspoMessage3]
const authors = ['John Lennon', 'Unknown', 'Keith and Mick']
const beginningMessage = ['Don\'t forget', 'Always remember', 'Cheer up']

// console.log(messageArray)
// console.log(authors)
// console.log(beginningMessage)
function randMessage() {
  let randIndex = Math.floor(Math.random() * 3)
  let randBeginning = beginningMessage[Math.floor(Math.random() * 3)]
  return `${randBeginning},\n ${messageArray[randIndex]}\n\t-${authors[randIndex]}`
}

console.log(randMessage())
