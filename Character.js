function Character(data) { 
  this.name = data.name;
  this.avatar = data.avatar;
  this.health = data.health;
  this.diceCount = data.diceCount;
  this.score = data.score;

  this.getCharHtml = function () {
    return `<div class="character-card">
        <h4 class="name">${this.name}</h4>
        <img class="avatar" src="${this.avatar}"/>
        <p class="health">health: <b> ${this.health}</b></p>
        <div class="dice-container"><div class="dice"> ${this.score} </div></div>
    </div>`
  }
  
  this.justPlay = function () {
    console.log('play called from constructor');
  }
}


export default Character