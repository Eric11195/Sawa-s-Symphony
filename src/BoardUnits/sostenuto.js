import { clockInstance, notasPool } from "../Scenes/combatScene.js";
import BoardUnit from "./boardUnit.js";

export default class Sostenuto extends BoardUnit{
    static initDuration = 4;
    duration;
    constructor(scene, startPos, noteDirection, tipoNota, wait){
        super(scene,startPos,"sostenuto");
        this.setOrigin();
        this.setDisplaySize(100,100);
        this.tipoNota = tipoNota;
        this.noteDirection = noteDirection;
        this.duration = Sostenuto.initDuration-1;
        this.noteKeywords = [];
        clockInstance.eventEmitter.on("BeatNow", this.BeatFunction,this);
        //Por si se spawnea justo antes de un beat;
        this.wait = 0;
        if(wait){
            this.wait = 1
        }
    }

    BeatFunction(){
        if(!this.wait){
            //console.log(this.position.x, " ", this.position.y, " ", this.noteDirection, " ", this.tipoNota);
            notasPool.Spawn("nota", this.position.x,this.position.y,this.noteDirection,this.tipoNota).AddKeyword(this.noteKeywords);
            this.duration--;
            if(this.duration <= 0) {
                clockInstance.eventEmitter.removeListener("BeatNow", this.BeatFunction,this);
                this.destroy();
            }
        }
        else{
            this.wait--;
        }
    }
}