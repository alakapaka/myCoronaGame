import Sound from "./sound.js"

export default class Player {

    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 140 * 0.75;
        this.height = 310 * 0.9;
        this.startHeight = 270 * 0.9;
        this.killed = false;
        this.counter = 0;
        this.maxSpeed = 13;
        this.speed = 0;
        this.latitude = 0;
        this.man = document.getElementById('man');
        this.ambu = document.getElementById('ambu');
        this.failed = new Sound("failed.mp3");
        this.ambuSound = new Sound("ambulance.mp3");
        this.jump = new Sound("jump.mp3");
        this.position = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight - this.height - 10,
            startGameWidth: this.gameWidth / 2 - this.width / 2,
            startGameHeight: this.gameHeight - this.height - 10,
        }
    }

    draw(ctx) {
        if (!this.killed) ctx.drawImage(this.man, this.position.x, this.position.y, this.width, this.height);
        if (this.killed) ctx.drawImage(this.ambu, this.position.x, this.position.y, 800, 550);
    }

    update(deltaTime) {
        if (this.game.score.alive) {
            if (!deltaTime) return
            this.position.x += this.speed;
            this.speed /= 2;
            this.position.y += this.latitude
            if (this.position.y > this.position.startGameHeight) this.position.y = this.position.startGameHeight;
            if (this.position.y < 100) this.latitude += this.maxSpeed / 4;
            if (this.position.x < 35) this.position.x = 35;
            if (this.position.x > this.position.startGameWidth * 2 - 35) this.position.x = this.position.startGameWidth * 2 - 35;
        }
        if (!this.game.score.alive) {
            if (!this.killed) this.kill()

            if (this.killed) {
                if (this.counter === 0) {
                    if (this.position.x < -300) this.position.x = -300;
                    if (this.position.y < 20) this.position.y = 20;
                    this.position.x -= 10
                    this.position.y -= 10
                }
                if (this.position.x <= -300 && this.position.y <= 20) {
                    this.counter++
                    if(this.counter === 1) this.ambuSound.play();
                    if (this.counter >= 40) {
                        this.position.x -= 3
                        this.game.score.txtFont = '70px "Press Start 2P"';
                        this.game.score.txtCon = `GAME OVER    `;
                        this.game.score.counter = "";
                        this.game.score.position.x = 87;
                        if (this.game.score.position.y < 400 && this.counter <= 400) {
                            this.game.score.again = "Press enter to play again"
                            this.game.score.position.y++;
                            if (this.game.score.position.y >= 400) this.game.score.position.y -= 10;
                        }

                    }
                }
            }

        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed * 2

    }

    moveRight() {
        this.speed = this.maxSpeed * 2

    }

    moveUp() {
        this.jump.play()
        this.latitude = -this.maxSpeed
        this.height = this.startHeight
        this.shrink = false

    }

    kill() {
        this.game.bgMusic.stop()
        this.killed = true
        this.failed.play()
        this.man = ambu
        this.position.x = 800
        this.position.y = 1150
    }

    newGame() {
        this.game.newGame()
    }


} 