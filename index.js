import Character from './Character.js'
import characterData from './data.js'


function render() { 
    document.getElementById('hero').innerHTML = wizard.getCharHtml()
    document.getElementById('monster').innerHTML = orc.getCharHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()