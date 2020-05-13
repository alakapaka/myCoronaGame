export default class Bg {

    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.counter = 1
        this.finished = true
        this.width = 80;
        this.height = 50;
        this.bg = document.getElementById('bg')
        this.frameSpeed = 50 + this.game.score.counter / 100

        this.position = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight / 2,
            startY: this.gameHeight / 2,
        }
    }
    
    

    draw(ctx) {
        // const gameWidth = 800;
        // const gameHeight = 600;
        this.strips(ctx)
        ctx.fillStyle = '#4A4A42'
        ctx.fillRect(0, 300, 300, 300)
        ctx.fillStyle = '#35C9F6'
        ctx.fillRect(0, 0, 800, 300)
        for (let index = 0; index < 30; index++) {
            // left
            ctx.fillStyle = '#4A4A42'
            ctx.fillRect(290, 300, 100 - index, 10 + index * 10)
            // right
            ctx.fillRect(800 - 360 - index, 300, 380, 300 - index * 10)
            // // sidewalk right
            // ctx.fillStyle = '#E92102'
            // ctx.fillRect(800 - index * 10, 300, 0 + index * 10, 300 - index * 10)
            // // sidewalk left
            // ctx.fillRect(0 + index * 10, 300, 0 - index * 10, 300 - index * 10)
            
        }
        ctx.drawImage(bg,0,150)

    }
    update(deltaTime) {
        this.frameSpeed += this.frameSpeed * 0.0005
        if (!deltaTime) return
        this.position.y += this.frameSpeed / deltaTime;
        if (this.position.y > 400) {
            this.position.y = this.position.startY
        }

    }



    strips(ctx) {
        if (this.counter > 0.01) this.counter = 0
        ctx.fillStyle = '#FFFFEC'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#4A4A42'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#FFFFEC'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#4A4A42'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#FFFFEC'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#4A4A42'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#FFFFEC'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++
        ctx.fillStyle = '#4A4A42'
        ctx.fillRect(this.position.x, this.position.y + this.height * this.counter - 100, this.width, this.height)
        this.counter++


    }


} 