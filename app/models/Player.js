export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0
    }
    get PlayerTemplateCard() {
        return `
        <div class = "card">
            <button onClick = "app.PlayersController.scorePoint('${this.name}')" class = "card-body">
            ${this.name} - ${this.score}
            </button>
        </div>`
    }
}
