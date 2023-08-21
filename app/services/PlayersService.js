import { AppState } from "../AppState.js";

class PlayersService {
    scorePoint(playerName) {
        let player = AppState.players.find(player => player.name == playerName)
        player.score++
        console.log('service', playerName, player.score)
    }
}

export const playersService = new PlayersService()