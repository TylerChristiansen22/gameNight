import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {
    constructor() {
        console.log(AppState.players)
        this.drawPlayers()
    }

    drawPlayers() {
        // needs the players
        // generate html to display
        // inject html to the dom
        update()

    }
    scorePoint(playerName) {
        console.log(playerName)
        playersService.scorePoint(playerName)
        update()
    }
}

function update() {
    let content = ''

    AppState.players.forEach(player => {
        content += player.PlayerTemplateCard
        //console.log(content)
    })
    document.getElementById('players').innerHTML = content
}
