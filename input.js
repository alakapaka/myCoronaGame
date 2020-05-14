export default class InputHandler {

    constructor(player) {
        document.addEventListener("keydown", evnet => {
            switch (event.keyCode) {
                case 37:
                    if(!player.killed)
                    player.moveLeft()
                    break;
                case 38:
                    if(!player.killed)
                    player.moveUp();
                    break;
                case 39:
                    if(!player.killed)
                    player.moveRight();
                    break;
                case 13:
                    if (player.killed) {
                        player.newGame();
                        break;
                    }
                    break;

            }
        });
    }
}