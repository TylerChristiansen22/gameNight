export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0
    }
    get PlayerTemplateCard() {
        return `
        <section class="row justify-content-between">
    <div id="players" class="col-12">
        <span>${this.name}</span>
        <span>${this.score}</span>
        <button onClick="app.PlayersController.removePoint('${this.name}')"><i class="mdi mdi-minus"></i></button>
        <button onClick="app.PlayersController.scorePoint('${this.name}')"><i class="mdi mdi-plus"></i></button>
    </div>
</section>`
    }
}