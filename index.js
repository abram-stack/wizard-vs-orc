import Character from './Character.js'
import characterData from './data.js'

let monstersArray = ['orc', 'demon', 'goblin']
let isWaiting = false;

const getNewMonster = () => {
    // characterData['orc']
    const nextMonsterTarget = characterData[monstersArray.shift()];
    return nextMonsterTarget ? new Character(nextMonsterTarget) : {}
}

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
    if (!isWaiting) {
        wizard.setDiceHtml()
        monster.setDiceHtml()

        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()

        if (wizard.dead) 
        endGame()    
        else if(monster.dead){
            if (monstersArray.length > 0) {
                isWaiting = true;
                setTimeout(() => {
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                }, 1500)
            }
            else
                endGame()
        }
    }
}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ?
    'Both died bravely'
    : wizard.health === 0 ? 'Darkness ruleees'
    : `${monster.name} has been banished`
    console.log(endMessage)
    setTimeout(() => { 
        const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2> 
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>
            `
    }, 1500)
    
    isWaiting = true;
    
}

function render() { 
    document.getElementById('hero').innerHTML = wizard.getCharHtml()
    document.getElementById('monster').innerHTML = monster.getCharHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster();

render()