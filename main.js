let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let playerWidth = 100

let player = new Player(canvas.width/2 - playerWidth, canvas.height-100, playerWidth, 60);
let playerImage = document.getElementById('player')

let alien = new Alien(70, 40);
let alienImage = document.getElementById('alien')

let theAliens = []
let perRowAlien = []
let perRowAliensQty = 10;
let numOfAliens = 30;

for (var i = 1; i <= numOfAliens / perRowAliensQty; i++) {
    for (var j = 1; j <= perRowAliensQty; j++) {
        theAliens.push({
            x: canvas.width * (j / perRowAliensQty) - alien.width - 20,
            y: (i * alien.height) + i * alien.aliensOffsetY,
            status: 1,
        })
    }
    // theAliens.push(perRowAlien)
    // perRowAlien = []
}
console.log(theAliens)
alien.aliens = theAliens

// let arah = "kanan"
// setInterval(() => {

// }, 2000);

setInterval(() => {
    alien.shoot();
    console.log("shoot");
}, 1000);

const game = new Game;

function drawAll() {
    player.draw(ctx, playerImage)                                                                   
    alien.draw(ctx, canvas.width, canvas.height, alienImage)
}

function updateAll() {
    player.update(canvas, ctx);
    alien.update(canvas, ctx)
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(game.isStarted == true) {
        drawAll()
        updateAll()
    }else{
        game.drawHomeScreen(ctx, canvas)
    }

    if(game.gameOver == true) return
    requestAnimationFrame(loop)
}



function keyDown(e) {
    if (e.key == "ArrowRight" || e.key == "d") {
        console.log('right')
        player.dx = +1;
    } else if (e.key == "ArrowLeft" || e.key == "a") {
        console.log('left')
        player.dx = -1;
    }
}

function keyUp(e) {
    if (e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "a" || e.key == "d") {
        player.dx = 0;
    }

    if (e.code == "Space") {
        console.log("shoot")
        player.shoot(canvas, ctx)
    }
}



document.addEventListener("keyup", keyUp, false);
document.addEventListener("keydown", keyDown, false);
requestAnimationFrame(loop)