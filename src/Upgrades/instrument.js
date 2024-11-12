import Nota from "../Projectiles/nota.js"
import { clockInstance, notasPool} from "../Scenes/combatScene.js";
import InstrumentCdImage from "../UIelems/instrumentsCdImage.js";
import InstrumentEffects from "../Effects/instrumentEffects.js";

export default class Instrumento{
    sceneRef;
    nombre = "default";
    description = "Lorem Ipsum";
    numeroNotas = 1;
    notePositionMod = [{x:0,y:0}];
    tipoNotas = 1;
    actualCooldown = 0;
    baseCooldown = 0;
    noteKeywords={};
    listOfGetValuesOnCreatedInstrument = ["Play","ProducirNotas","ThrowNotes", "SpawnNotes", "noteKeywords", "nombre", "numeroNotas", "notePositionMod", "baseCooldown", "description"]/*, "instrumentKeywords" ];*/

    cdImage;
    /**
     * @param instrumentConfig el instrumento de la base de datos con todos los parametros
     */
    constructor(scene, instrumentConfig, instrumentNumber){
        this.sceneRef = scene;
        if(instrumentConfig instanceof Instrumento){
            //Modificar solo lo que debería del instrumento ya creado
            for(let key in this.listOfGetValuesOnCreatedInstrument){
                this[this.listOfGetValuesOnCreatedInstrument[key]] = instrumentConfig[this.listOfGetValuesOnCreatedInstrument[key]];
            }
        }else{
            Object.keys(instrumentConfig).forEach(key => {
                //console.log(key);
                this[key] = instrumentConfig[key];
                //const value = object[key];
            });
        }


        this.AddKeyword(this.instrumentKeywords);
        
        this.cdImage = new InstrumentCdImage(scene,this,instrumentNumber);

        //console.log(clockInstance);

        //Se ejecuta a cada beat
        clockInstance.eventEmitter.on("BeatNow", ()=>{
            //console.log(this.actualCooldown);
            if(this.actualCooldown!=0){
                this.actualCooldown--;
                this.UpdateImageCd();
            }
        });
    }

    /**
     * Toca este instrumento
     * @param {*} scene escena en la que se van a spawnear las notas
     * @param {*} posX posicion en X desde donde se toca el instrumento
     * @param {*} posY posición en Y desde donde se toca el instrumento
     */
    Play(x,y,cdToAdd,beforeBeat, thisInstrument){
        //Sets the cooldown


        thisInstrument.actualCooldown = thisInstrument.baseCooldown+cdToAdd;



        //console.log(this.actualCooldown);
        thisInstrument.ProducirNotas();


        thisInstrument.UpdateImageCd();
        //this.cdImage.UpdateCd(this.actualCooldown);
        //console.log(beforeBeat);

        
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
        //Previene que se generen notas fuera del tablero
        if(posY < 5 && posY >= 0){           
            notasPool.Spawn(posX,posY,1,tipoNotas).AddKeyword(this.noteKeywords);
        }
    }

    AddKeyword(config){
        if(config)
            //console.log(config);
            Object.keys(config).forEach(key => {
                InstrumentEffects[key](this, config[key]);
            });
    }

    UpdateImageCd(){

        this.cdImage.UpdateCd(this.actualCooldown);
    }
}
