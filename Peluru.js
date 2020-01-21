class Peluru {
    constructor(x, y, w, h, dy, color, from) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dy = dy;
        this.color = color;
        this.from = from;
        this.status = 1;
    }

    launch() {
        if(this.status == 1) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.fill();
        }
    }

    update() {
        this.y += this.dy;
        if(this.from == "Alien") {
            if(this.y > player.y - player.height + 10&&
                this.y <= player.y + player.height &&
                this.x >= player.x &&
                this.x <= player.x + player.width
                ) {
                // console.log('kena')
                game.gameOver = true;
            }
        }
        
        this.launch();
    }
}