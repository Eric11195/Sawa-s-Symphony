import { Tile00PositionX, Tile00PositionY,  TileDiffX, TileDiffY } from "../Utils/screenPositions.js";
import {clockInstance} from "../Scenes/combatScene.js";
import NotasEffects from "../Effects/notasEffects.js";


// no se si deberia extender de phaser.gameobject.sprite o de que, esto lo cambiare cuando sepa
export default class Proyectil extends Phaser.GameObjects.Sprite{
    // Contiene la velocidad en compases por beat, 
    speed;
    //Dirección hacia la que avanza la nota
    direction;
    notesCollidedWith = [];
    acceptsKeywords = true;
    /**
     * @param {*} scene la escena en la que se genera la nota
     * @param {*} posX x de la casilla en la que se genera la nota
     * @param {*} posY y de la casilla en la que se genera la nota
     * @param {*} direction 1 si es la lanza el jugador, -1 si la lanza el enemigo
     */
    constructor(scene, pool) {
        super(scene, 0, 0, "notes");
        scene.add.existing(this);
        this.pool = pool;
        this.setScale(2,2);
        //this.direction = direction;
        this.speed = 1;

        scene.physics.add.existing(this);
        this.body.setSize(20, 20, true);

        //takes the event postupdate from the scene and makes this function postUpdate be called when received
        clockInstance.eventEmitter.on("BeatNow", ()=>{
            if(this.silent > 0) this.silent--;
        });
        
        this.container = this.scene.add.container(this.x, this.y);

        //  Our emitter
        this.emitter = this.scene.add.particles(0, 0, 'earwormParticle', {
            lifespan: 200,
            speed: { min: 200, max: 400 },
            angle: {min:-135, max:-100},
            gravityY: -100
        });
        //scene.notes.add(this);
        this.emitter.pause();
        this.container.add(this.emitter);
    }

    preUpdate(t,dt){
        //console.log(dt);
        super.preUpdate(t,dt);
        //console.log(this.silent);
        if(!this.silent) this.MoveForward(dt);

        //console.log(this.silent);
    }

    /**Move forward until it gets out of board*/
    MoveForward(dt){
        /** @todo Habrá que buscar una manera de implementar el delta time que no implique ponerle contadores a todas las notas
         */
        this.x += this.direction * dt/1000 *((this.speed * TileDiffX()) / (clockInstance.delayTimer/1000));

        this.container.x = this.x;
        this.container.y = this.y;
        //console.log("dir ",this.direction, " dt ", this.deltaTime, " sp ",this.speed, "clT", clockInstance.delayTimer);

        //Si se sale por la derecha destruir (o igual esto es mejor hacerlo con un trigger en esa zona)
        /**@todo investigar si hacer con un trigger en vez de por coordenadas */
        if(this.x > Tile00PositionX() + 6.3 * TileDiffX()){
            this.DestroyMe();
            this.emitter.pause();
            this.emitter.setVisible(false);
        }
    }

    AddKeyword(config){
        if(config && this.acceptsKeywords)
            Object.keys(config).forEach(key => {
       // console.log(key);
                NotasEffects[key](this, config[key]);
            });
        if(this.earworm > 0){
            this.emitter.resume();
            this.emitter.setVisible(true);
            this.emitter.setFrequency(clockInstance.delayTimer / (2*this.earworm));
            //this.emitter.setQuantity(this.earworm/1000);
            console.log(this.emitter.quantity);
        }else{
            this.emitter.pause();
            this.emitter.setVisible(false);
        }
    }

    /*config needs: 
        -direction
        -tipoNota
    */
    SetSpawnParameters(x,y,direction, tipoNota){
        this.setX(Tile00PositionX() + x * TileDiffX());
        this.setY(Tile00PositionY() + y * TileDiffY());
        this.direction = direction;
        this.tipoNota = tipoNota;
        this.speed = 1;
        this.silent = 0;
        this.earworm = 0;
        this.piano = false;
        this.applyToEnemyNotes = [];
        this.applyToAllyNotes = [];
        this.notesCollidedWith = [];
        this.applyToSelfOnEnemyNoteImpact = [];
        this.applyToSelfOnAllyNoteImpact = [];
        this.acceptsKeywords = true;
        this.emitter.pause();
        this.emitter.setVisible(false);
        
    }

    SetAcceptsKeywords(bool){
        this.acceptsKeywords = bool;
    }

    UpdateImage(){
        //console.log(this.tipoNota);
        this.play("notes"+this.tipoNota);
    }

    DestroyMe(){
        this.emitter.pause();
        this.pool.Release(this);
    }
}
