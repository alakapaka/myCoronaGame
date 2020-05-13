import Sound from "./sound.js"

export default class Corona {

    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.counter = 1;
        this.width = 103;
        this.height = 105;
        this.started = false;
        this.toFar = false;
        this.shown = false;
        this.scored = true;
        this.caught = false;
        this.corona = document.getElementById('corona');
        this.cough = new Sound("cough.mp3")
        this.apRand = (Math.floor(Math.random() * 400)) + 200;
        this.frameSpeed = 65 + this.game.score.counter / 100;
        this.randomX = Math.floor(Math.random() * (this.gameWidth / 3));

        this.position = {
            x: this.gameWidth / 3 + this.randomX,
            startX: this.gameWidth,
            y: -129,
            startY: this.gameHeight / 2 - this.height / 2,
            midX: this.gameWidth / 2,
            midY: this.gameHeight / 2,
        }
    }


    draw(ctx) {
        ctx.drawImage(this.corona, this.position.x, this.position.y)
    }

    update(deltaTime) {
        this.frameSpeed += this.frameSpeed * 0.0005
        if(!this.game.p1.killed){

            this.counter++
            if (!deltaTime) return
            this.randomSpot()
            this.makeCorona(deltaTime)
            this.catchCorona()
            if (this.caught) {
                this.score()
                this.caught = false
            }
            if (this.position.y > 805) this.shown = false
        }

    }

    catchCorona() {
        let p1L = this.game.p1.position.x
        let p1R = this.game.p1.position.x + this.game.p1.width
        let p1U = this.game.p1.position.y
        let p1D = this.game.p1.position.y + this.game.p1.height
        let corR = this.position.x + this.width
        let corL = this.position.x
        let corU = this.position.y
        let corD = this.position.y + this.height

        if (this.position.y >= this.position.startY) {


            if (corR >= p1L && corL < p1L && corD >= p1U) {
                this.caught = true
                this.cough.play()
            }
            else if (corL <= p1R && corR > p1R && corD >= p1U) {
                this.caught = true
                this.cough.play()
            }
            else if (corR >= p1L && corL < p1L && corU <= p1D && corD >= p1D) {
                this.caught = true
                this.cough.play()
            }
            else if (corL <= p1R && corR > p1R && corD >= p1D && corU <= p1D) {
                this.caught = true
                this.cough.play()
            }
        }

    }

    score() {
        this.game.score.txtFont = '25px "Press Start 2P"'
        this.game.score.txtCol = "#FF0000"
        this.game.score.counter -= 500
        this.shown = false
        this.position.y = -this.height
    }

    makeCorona(deltaTime) {
        if (this.shown) {
            this.position.y += this.frameSpeed / deltaTime
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

    randomSpot() {
        if (this.counter % this.apRand === 0 && !this.shown) {
            this.randomX = this.position.startX / 3 + Math.floor(Math.random() * (this.position.startX / 3));
            this.position.x = this.randomX;
            this.position.y = 0;
            this.toFar = false;
            this.started = false;
            this.shown = true;
        }
    }

} 