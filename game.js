import Player from './player.js'
import Bg from './backGround.js'
import InputHandler from './input.js'
import Clouds from './clouds.js'
import Misc from './misc.js'
import Alco from './alco.js'
import Score from './score.js'
import Corona from './corona.js'
import Sound from './sound.js'


export default class Game {



    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }
    gamesPlayed = 0;

    start() {
        this.header = document.getElementById('header')
        this.score = new Score(this);
        this.bg = new Bg(this);
        this.p1 = new Player(this);
        this.clouds = new Clouds(this);
        this.misc = new Misc(this);
        this.alco = new Alco(this);
        this.corona = new Corona(this);
        this.bgMusic = new Sound("backGround.mp3")
        this.begin = true;
        this.gameObjects = [
            this.bg,
            this.p1,
            this.clouds,
            this.misc,
            this.alco,
            this.score,
            this.corona
        ]

        new InputHandler(this.p1);

    }

    update(deltaTime) {
        if (!this.p1.killed && !this.begin) {
            this.gameObjects.forEach((object) => object.update(deltaTime));
        }
        if (!this.p1.alive) {
            this.clouds.update(deltaTime)
            this.p1.update(deltaTime)
        }
    }

    draw(ctx) {
        if (!this.p1.killed && !this.begin) {
            this.gameObjects.forEach((object) => object.draw(ctx));
        }
        if (this.begin) {
            this.bg.draw(ctx)
            this.clouds.draw(ctx)
            this.misc.draw(ctx)
            this.p1.draw(ctx)
            this.score.draw(ctx)
            let x = 30
            let y = 300
            ctx.drawImage(this.header,x - 30,y-200)
            ctx.fillStyle = '#00FA9A'
            ctx.font = '30px "Press Start 2P"'
            ctx.fillText("Press enter to start", x+30, y)
            ctx.strokeText("Press enter to start", x+30 , y)
            ctx.fillStyle = '#FAA3DB'
            ctx.font = '20px "Press Start 2P"'
            ctx.fillText("Can you make it to the airport?", x + 30, y - 100)
            // ctx.strokeText("Can you make it to the airport?", x +30, y - 100)
            // ctx.fillText(" to the airport?", x, y - 55)
            // ctx.strokeText(" to the airport? ", x, y - 55)
            document.addEventListener("keydown", evnet => {
                if (event.keyCode === 13) {
                    x = -50;
                    y = -100;
                    this.begin = false;
                }
            })
        }
        if (this.p1.killed && !this.begin) {
            this.bg.draw(ctx)
            this.clouds.draw(ctx)
            this.misc.draw(ctx)
            this.p1.draw(ctx)
            this.score.draw(ctx)
        }
    }

    newGame() {
        // this.bgMusic.play
        this.score.counter = 0;
        this.p1.killed = false;
        this.gamesPlayed++;
        this.start();

    }

}
