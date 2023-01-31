
// show number of dice-ocntainer 

// create an array, with items, depends on how much diceRoll
//return the empty placeholder
function getPlaceholderHtml(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return `<div class="placeholder-dice"></div>`
  }).join("")
}


//get random number from 1-6 depends on the diceRoll of each character
// ie. diceRoll: 3, -> create array[1,3,4]
// save to currentDiceScore[1, 3, 4]
function getDiceScore(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6 + 1)
  })
}

const getPercentage = (remainHealth, maxHealth) => { 
  return 100 * remainHealth / maxHealth; 
}
export { getPlaceholderHtml, getDiceScore, getPercentage }