class Player {
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height 
        this.dx = 0
        this.peluru_ditembak = [];
    }

    draw(ctx, player) {
        
        ctx.drawImage(player, this.x, this.y, this.width, this.height)
    }

    update(canvas, ctx) {
        for(var i=1;i<=10;i++) {
            if(this.x + this.width == canvas.width) {
                console.log('mentok')
                this.dx = 0;
                this.x = this.x-1
            }else{
                this.x += this.dx;
            }
        }

        this.peluru_ditembak.forEach(pelor => {
            pelor.update();
        })

    }

    shoot(canvas, ctx) {
        let peluru = new Peluru(this.x + this.width/2, this.y, 2, 50, -5, "blue", "Player");
        peluru.launch();
        this.peluru_ditembak.push(peluru)
    }


}