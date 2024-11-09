
import {clockInstance} from "../Scenes/combatScene.js"
import baseProjectile from "./baseprojectile.js";
//import NotesEffects from "../Effects/notasEffects.js";

export default class Nota extends baseProjectile{
    /** Contiene uno de los objetos de notas (la array-like object de arriba) */
    tipoNota;
    /**
     * @param {*} scene la escena en la que se genera la nota
     * @param {*} posX x de la casilla en la que se genera la nota
     * @param {*} posY y de la casilla en la que se genera la nota
     * @param {*} tipoNota 0 para corchea, 1 para negra y 2 para blanca
     * @param {*} direction 1 si es la lanza el jugador, -1 si la lanza el enemigo
     */
    constructor(scene, posX, posY, tipoNota, direction){
        super(scene, posX, posY, direction, "notes");
        this.setScale(2,2);
        this.setOrigin(0,0.75);

        //this.tipoNota = notas[tipoNota];
        this.silent = 0;
       
        this.tipoNota = tipoNota;
        

        //Se define como nota del player o del enemy
        if(this.direction == 1){
            scene.playerNotes.add(this);
            this.tint = 0x179bae;
        }else{
            scene.enemyNotes.add(this);
            this.tint = 0xff8343;
            this.setFlipY(true);
        }

        this.UpdateImage();
    }
    UpdateImage(){
        this.play("notes"+this.tipoNota);
    }

    //After each update moves note forward
    //this needs to be done because deltaTime is not defined until the first update

}
