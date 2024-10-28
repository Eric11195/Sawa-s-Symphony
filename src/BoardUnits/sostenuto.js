import { clockInstance } from "../Scenes/combatScene.js";
import Nota from "../Projectiles/nota.js";
import BoardUnit from "./boardUnit.js";

export default class Sostenuto extends BoardUnit{
    static initDuration = 3;
    duration;
    constructor(scene, startPos, noteDirection, tipoNota){
        super(scene,startPos,"sostenuto");
        this.setOrigin();
        this.setDisplaySize(100,100);
        this.tipoNota = tipoNota;
        this.noteDirection = noteDirection;
        this.duration = Sostenuto.initDuration-1;
        clockInstance.eventEmitter.on("BeatNow", this.BeatFunction,this);
    }

    BeatFunction(){
        new Nota(this.scene, this.position.x,this.position.y,this.tipoNota, this.noteDirection);
        this.duration--;
        if(this.duration <= 0) {
            clockInstance.eventEmitter.removeListener("BeatNow", this.BeatFunction,this)
            this.destroy();
        }
    }
}