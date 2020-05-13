export default class Clouds {

    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.counter = 1
        this.finished = true
        this.width = 80;
        this.height = 50;
        this.cloud = document.getElementById('cloud');

        this.position = {
            x: 0 ,
            startX: this.gameWidth / 2 ,
            y: this.gameHeight / 8,
            startY: this.gameHeight / 2,
        }
    }


    draw(ctx) {
        
        ctx.drawImage(this.cloud, this.position.x, this.position.y)
        ctx.drawImage(this.cloud, this.position.x - 150, this.position.y - this.height,100,50)
        ctx.drawImage(this.cloud, this.position.x - 350, this.position.y + this.height,70,30)
        ctx.drawImage(this.cloud, this.position.x - this.position.startX -50 , this.position.y - this.height,50, 23)
        ctx.drawImage(this.cloud, this.position.x - this.position.startX +80 , this.position.y - this.height + 30,30, 14)
        ctx.drawImage(this.cloud, this.position.x - this.position.startX - 200 , this.position.y ,100, 50)
        ctx.drawImage(this.cloud, this.position.x -700, this.position.y + 50 )
        ctx.drawImage(this.cloud, this.position.x - 150 - 700, this.position.y - this.height,100,50)
        ctx.drawImage(this.cloud, this.position.x - 350 - 700, this.position.y + this.height,70,30)
        ctx.drawImage(this.cloud, this.position.x - this.position.startX -50 - 700 , this.position.y - this.height,50, 23)
        ctx.drawImage(this.cloud, this.position.x - this.position.startX +80 - 700, this.position.y - this.height + 30,30, 14)
        ctx.drawImage(this.cloud, this.position.x - this.position.startX - 200 - 700   , this.position.y ,100, 50)
        // ctx.beginPath();
        // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.stroke();    
        // // const gameWidth = 800;
        // // const gameHeight = 600;


    }
    update(deltaTime) {

        if (!deltaTime) return
        this.position.x += 21 / deltaTime;
        if (this.position.x > 2100) this.position.x = 0
        // console.log(this.position.x)


    }






} 