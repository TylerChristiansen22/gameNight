import { AppState } from "../AppState.js";

class PlayersService {
    scorePoint(playerName) {
        let player = AppState.players.find(player => player.name == playerName)
        player.score++
        console.log('service', playerName, player.score)
    }
    removePoint(playerName) {
        let player = AppState.players.find(player => player.name == playerName)
        if (player.score > 0) {
            player.score--
        }
    }
}

export const playersService = new PlayersService()