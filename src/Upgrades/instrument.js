import Nota from "../projectiles/nota.js"
import { clockInstance } from "../Scenes/combatScene.js";
import InstrumentCdImage from "../UIelems/instrumentsCdImage.js";
import InstrumentEffects from "../Effects/instrumentEffects.js";

export default class Instrumento{
    sceneRef;
    nombre = "default";
    numeroNotas = 1;
    notePositionMod = [{x:0,y:0}];
    tipoNotas = 1;
    actualCooldown = 0;
    baseCooldown = 0;
    noteKeywords={};

    cdImage;
    /**
     * @param instrumentConfig el instrumento de la base de datos con todos los parametros
     */
    constructor(scene, instrumentConfig, instrumentNumber){
        this.sceneRef = scene;
        Object.keys(instrumentConfig).forEach(key => {
            this[key] = instrumentConfig[key];
            //const value = object[key];
        });

        this.AddKeyword(this.instrumentKeywords);
        
        this.cdImage = new InstrumentCdImage(scene,this,instrumentNumber);
        //Se ejecuta a cada beat
        clockInstance.eventEmitter.on("BeatNow", ()=>{
            if(this.actualCooldown!=0){
                this.actualCooldown--;
                this.cdImage.UpdateCd(this.actualCooldown);
            }
        });
    }

    /**
     * Toca este instrumento
     * @param {*} scene escena en la que se van a spawnear las notas
     * @param {*} posX posicion en X desde donde se toca el instrumento
     * @param {*} posY posición en Y desde donde se toca el instrumento
     */
    Play(x,y,cdToAdd,beforeBeat){
        //Sets the cooldown
        console.log(cdToAdd);
        this.actualCooldown = this.baseCooldown+cdToAdd;
        console.log(this.actualCooldown);
        //console.log(this.actualCooldown);
        this.ProducirNotas();
        this.cdImage.UpdateCd(this.actualCooldown);
        //console.log(beforeBeat);
        //Previene que se generen notas fuera del tablero
        
    }

    ProducirNotas(){
        this.ThrowNotes();
        if(this.numeroNotas > 1){
            this.sceneRef.time.addEvent({delay: clockInstance.delayTimer/this.numeroNotas, repeat:(this.numeroNotas-2), callback: this.ThrowNotes, callbackScope: this});
        }
    }
    ThrowNotes(){
        for(let i = 0; i < this.notePositionMod.length; i++){
            this.SpawnNotes(this.sceneRef.player.position.x+this.notePositionMod[i].x, this.sceneRef.player.position.y+this.notePositionMod[i].y, this.tipoNotas);
        }
    }
    SpawnNotes(posX,posY, tipoNotas){
        if(posY < 5 && posY >= 0){
            new Nota(this.sceneRef, posX, posY, tipoNotas, 1).AddKeyword(this.noteKeywords);
        }
    }

    /**Receives a function to be called in this instrument */
    ApplyUpgrade(upgrade){
        upgrade(this);
    }

    AddKeyword(config){
        if(config)
        Object.keys(config).forEach(key => {
            InstrumentEffects[key](this, config[key]);
        });
    }
}
