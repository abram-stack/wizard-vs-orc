import Character from './Character.js'
import characterData from './data.js'

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
    wizard.getDice()
    orc.getDice()

    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.dead || orc.dead) {
        endGame()
    }
}
function endGame() {
    const endMessage = wizard.health === 0 && orc.health === 0 ?
        'Both died bravely'
        : wizard.health === 0 ? 'Orc ruleees'
        : 'Orc has been banished'
    console.log(endMessage);          
}

function render() { 
    document.getElementById('hero').innerHTML = wizard.getCharHtml()
    document.getElementById('monster').innerHTML = orc.getCharHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()