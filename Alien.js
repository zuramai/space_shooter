class Alien {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.aliens = [];
        this.aliensOffsetY = 20;
        this.arah = "kanan"
        this.i = 0;
        this.shoot_alien_index = 0;
        this.shoot_iter = 0;
        this.peluru = [];
    }

    draw(ctx, canvasWidth, width,  alienImage) {
        // console.log(this.aliens)
        this.aliens.forEach((alien) => {
            if(!alien.status) return
            ctx.drawImage(alienImage, alien.x, alien.y, this.width, this.height)
        })
    }

    update(canvas, ctx) {
        this.i++;        
        this.aliens.forEach((a) => {
            if(this.arah == "kanan") {
                a.x += 0.2;
            }else{
                a.x -= 0.2;
            }
            // if (this.arah == "kanan") {
            //     for(var i = 1; i<=10;i++) {
            //         a.x += i;
                    
            //     }
            // } else if (this.arah == "kiri") {
            //     a.x -= 1;
            // }
        })
        this.reverse();
        if (this.aliens[this.shoot_alien_index].status == 0) {
            this.randomizeAlienIndex();
        }else{
            this.shoot();
        }

        // console.log(this.peluru)
        this.peluru.forEach((pelur) => {
            pelur.update();
        })
        this.collisionDetection();
    }

    reverse() {
        if(this.i % 40 == 0) {
            if(this.arah == "kanan") {
                this.arah = "kiri"
            }else{
                this.arah = "kanan"
            }
        }
    }

    shoot(playerX) {
        // console.log("shoot by:", alien);
        if(this.shoot_iter < 15) {
            this.aliens[this.shoot_alien_index].y++
        } else if (this.shoot_iter >= 15 && this.shoot_iter < 30) {
            this.aliens[this.shoot_alien_index].y--
            
            if(this.shoot_iter == 15) {
                this.tembak();
            }
        }else if(this.shoot_iter == 30) {
            this.shoot_iter = 0;
            this.randomizeAlienIndex();
        }
        this.shoot_iter++;
    }

    randomizeAlienIndex() {
        this.shoot_alien_index = Math.floor(Math.random() * this.aliens.length);   
    }

    tembak() {
        let peluru = new Peluru(this.aliens[this.shoot_alien_index].x + this.width/2, this.aliens[this.shoot_alien_index].y, 2, 50, 5, "red", "Alien");
        peluru.launch();
        this.peluru.push(peluru)
    }
    
    collisionDetection() {
        player.peluru_ditembak.forEach(pelor => {
            this.aliens.forEach(alien => {
                if(pelor.y <= alien.y && pelor.x >= alien.x && pelor.x <= alien.x + this.width && pelor.status == 1 && alien.status == 1) {
                    alien.status = 0;
                    pelor.status = 0;
                    console.log("mati");
                }
            })
        })
    }
}