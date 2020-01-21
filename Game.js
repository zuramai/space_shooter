class Game {
    constructor() {
        this.isStarted = true;
        this.gameOver = false;
        this.playerColor = "white";
        this.botColor = "black"
    }

    over() {
        this.gameOver = true;
    }

    drawHomeScreen(ctx, canvas) {
        // ctx.font = "30px arial"
        // ctx.fillText("Welcome to Space Shooter!", canvas.width/3 - 50 , canvas.height/2-100)
    }
}