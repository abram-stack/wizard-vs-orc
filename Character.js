import { getPlaceholderHtml, getDiceScore, getPercentage} from './utils.js'

function Character(data) { 
  this.name = data.name;
  this.avatar = data.avatar;
  this.health = data.health;
  this.diceCount = data.diceCount;
  this.currentDiceScore = data.currentDiceScore;
  this.maxHealth = data.health;

  this.diceHtml = getPlaceholderHtml(this.diceCount);

  this.setDiceHtml = function () {
    // we call function, and assign the value return to variable
    this.currentDiceScore = getDiceScore(this.diceCount)
    // we want to change the placeholder into dice with score inside
    this.diceHtml = this.currentDiceScore.map(function (dice) { 
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

  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth)
    // if percent lower than 25% add class danger to health-bar-inner
      return `<div class="health-bar-outer">
              <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" 
                style="width: ${percent}%;">
              </div>
            </div>`
  }

  this.getCharHtml = function () {
    const healthBar = this.getHealthBarHtml()

    return `<div class="character-card">
        <h4 class="name">${this.name}</h4>
        <img class="avatar" src="${this.avatar}"/>
        <p class="health">health: <b> ${this.health}</b></p>
        ${healthBar}
        <div class="dice-container">
          ${this.diceHtml}
        </div>
    </div>`
  }
}


export default Character