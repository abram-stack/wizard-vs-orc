import Character from './Character.js'
import characterData from './data.js'

let monstersArray = ['orc', 'demon', 'goblin']

const getNewMonster = () => {
    // characterData['orc']
    const nextMonsterTarget = characterData[monstersArray.shift()];
    return nextMonsterTarget ? new Character(nextMonsterTarget) : {}
}

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
    wizard.getDice()
    monster.getDice()

    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.dead) 
        endGame()    
    else if(monster.dead){
        if (monstersArray.length > 0)
            monster = getNewMonster()
        else
            endGame()
    }
}

function endGame() {
    
    if (monster)
        console.log('not empty');
    const endMessage = wizard.health === 0 && monster.health === 0 ?
    'Both died bravely'
    : wizard.health === 0 ? 'Darkness ruleees'
    : 'Orc Uruk haay has been banished'

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `
    
}

function render() { 
    document.getElementById('hero').innerHTML = wizard.getCharHtml()
    document.getElementById('monster').innerHTML = monster.getCharHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster();

render()