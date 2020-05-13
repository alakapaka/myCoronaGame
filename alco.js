import Sound from "./sound.js"

export default class Alco {

    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.counter = 1;
        this.width = 48;
        this.height = 129;
        this.started = false;
        this.toFar = false;
        this.shown = false;
        this.scored = false;
        this.caught = false;
        this.gel = document.getElementById('alco')
        this.splash = new Sound("splash.mp3");
        this.random = Math.floor(Math.random() * (this.gameWidth / 3))
        this.apRand = (Math.floor(Math.random() * 200)) + 50
        this.frameSpeed = 40 + this.game.score.counter / 100

        this.position = {
            x: this.gameWidth / 3 + this.random,
            startX: this.gameWidth,
            y: -this.height,
            startY: this.gameHeight / 2 - this.height / 2,
            midX: this.gameWidth / 2,
            midY: this.gameHeight / 2,
        }
    }


    draw(ctx) {
        ctx.drawImage(this.gel, this.position.x, this.position.y)
    }
    update(deltaTime) {
        this.frameSpeed += this.frameSpeed * 0.0005
        this.counter++
        if (!deltaTime) return
        if (this.counter % this.apRand === 0 && !this.shown) {
            this.position.x = this.position.startX / 3 + Math.floor(Math.random() * (this.position.startX / 3)),
                this.position.y = 0,
                this.toFar = false
            this.started = false
            this.shown = true
        }
        this.makeGel(deltaTime)
        this.catchGel()
        if (this.caught && !this.scored) {
            this.score()
            this.scored = true
            this.caught = false
        }
        if (this.position.y > 805) this.shown = false
    }

    catchGel() {
        let p1L = this.game.p1.position.x
        let p1R = this.game.p1.position.x + this.game.p1.width
        let p1U = this.game.p1.position.y
        let p1D = this.game.p1.position.y + this.game.p1.height
        let gelR = this.position.x + this.width
        let gelL = this.position.x
        let gelU = this.position.y
        let gelD = this.position.y + this.height



        if (gelR >= p1L && gelL < p1L && gelD >= p1U) {
            this.caught = true
            this.splash.play()
        }
        else if (gelL <= p1R && gelR > p1R && gelD >= p1U) {
            this.caught = true
            this.splash.play()
        }
        else if (gelR >= p1L && gelL < p1L && gelU <= p1D && gelD >= p1D) {
            this.caught = true
            this.splash.play()
        }
        else if (gelL <= p1R && gelR > p1R && gelD >= p1D && gelU <= p1D) {
            this.caught = true
            this.splash.play()
        }

    }

    score() {
        this.scored = true
        this.game.score.txtFont = '25px "Press Start 2P"'
        this.game.score.txtCol = "#FFF700"
        this.game.score.counter += 100
        this.shown = false
        this.position.y = -this.height
        this.scored = true
    }

    makeGel(deltaTime) {
        if (this.shown) {
            this.position.y += this.frameSpeed / deltaTime
            if (this.position.y >= this.position.startY) {
                if (this.position.x > this.position.midX) {
                    if (!this.started) {
                        this.started = true
                        this.position.x -= this.frameSpeed / deltaTime / 2
                    }
                    if (this.position.x >= this.position.midX + 1 && !this.toFar) this.position.x += this.frameSpeed / deltaTime
                    if (this.position.x >= 600 && this.started) this.toFar = true
                    if (this.toFar) this.position.x -= this.frameSpeed / deltaTime
                    if (this.position.x >= this.position.midX + 20 && this.toFar) this.toFar = false

                }
                if (this.position.x < this.position.midX) {
                    if (!this.started) {
                        this.started = true
                        this.position.x += this.frameSpeed / deltaTime / 2
                    }
                    if (this.position.x <= this.position.midX + 1 && !this.toFar) this.position.x -= this.frameSpeed / deltaTime
                    if (this.position.x <= 180 && this.started) this.toFar = true
                    if (this.toFar) this.position.x += this.frameSpeed / deltaTime
                    if (this.position.x <= this.position.midX + 20 && this.toFar) this.toFar = false
                }
            }
        }
    }

} 
