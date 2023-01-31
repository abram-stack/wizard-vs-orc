import { getPlaceholderHtml, getDiceScore} from './utils.js'

function Character(data) { 
  this.name = data.name;
  this.avatar = data.avatar;
  this.health = data.health;
  this.diceCount = data.diceCount;
  this.currentDiceScore = data.currentDiceScore;

  this.diceArray = getPlaceholderHtml(this.diceCount);

  this.getDice = function () {
    // we call function, and assign the value return to variable
    this.currentDiceScore = getDiceScore(this.diceCount)
    // we want to change the placeholder into dice with score inside
    this.diceArray = this.currentDiceScore.map(function (dice) { 
      return `<div class="dice">${dice}</div>`
    }).join("")
  }
  
  this.takeDamage = function (attackArray) {
    const totalAttackScore= attackArray.reduce(function (total, current) {
      return total + current
    })
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  }

  this.getCharHtml = function () {
    return `<div class="character-card">
        <h4 class="name">${this.name}</h4>
        <img class="avatar" src="${this.avatar}"/>
        <p class="health">health: <b> ${this.health}</b></p>
        <div class="dice-container">
          ${this.diceArray}
        </div>
    </div>`
  }
}


export default Character