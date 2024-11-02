import { Tile00PositionX, Tile00PositionY,  TileDiffX, TileDiffY } from "../Utils/screenPositions.js";


// no se si deberia extender de phaser.gameobject.sprite o de que, esto lo cambiare cuando sepa
class Proyectil extends Phaser.GameObjects.Sprite{
    // Contiene la velocidad en compases por beat, 
    speed;
    //Dirección hacia la que avanza la nota
    direction;
    /**
     * @param {*} scene la escena en la que se genera la nota
     * @param {*} posX x de la casilla en la que se genera la nota
     * @param {*} posY y de la casilla en la que se genera la nota
     * @param {*} direction 1 si es la lanza el jugador, -1 si la lanza el enemigo
     */
    constructor(scene, x, y, direction) {
        super(scene, Tile00PositionX(), Tile00PositionY(), '?');
        scene.add.existing(this);
        this.setScale(2,2);
        this.setOrigin(0,0.75);
        
        this.x = Tile00PositionX() + posX * TileDiffX();
        this.y = Tile00PositionY() + posY * TileDiffY();
        this.direction = direction;
        this.speed = 1;

        scene.physics.add.existing(this);
        this.body.setSize(20, 20, true);

    }

     /**Move forward until it gets out of board*/
     MoveForward(){
        /** @todo Habrá que buscar una manera de implementar el delta time que no implique ponerle contadores a todas las notas
         */
        this.x += this.direction * deltaTime/1000 *((this.speed * TileDiffX()) / (clockInstance.delayTimer/1000));
        //Si se sale por la derecha destruir (o igual esto es mejor hacerlo con un trigger en esa zona)
        /**@todo investigar si hacer con un trigger en vez de por coordenadas */
        if(this.x > Tile00PositionX() + 6.3 * TileDiffX()){
            this.destroy();
        }
    }
}

module.exports = Projectile;