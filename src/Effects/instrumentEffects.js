import { AddToFunctionAfter, AddToFunctionBefore } from "../Utils/addToFunction.js";
import {clockInstance, notasPool} from "../Scenes/combatScene.js";
import Instrument from "../Upgrades/instrument.js";
import Sostenuto from "../BoardUnits/sostenuto.js";

const instrumentEffects = {
    /**
     * @param {Instrument} instrument 
     */
    move: function(instrument, move){
        let auxMove = function(x,y,cdToWait, wait, thisInstrument){
            thisInstrument.sceneRef.player.Move(move.x,move.y);
        }
        instrument.Play = AddToFunctionBefore(instrument.Play.bind(instrument), auxMove.bind(instrument));
    },
    /**
     * 
     * @param {*} instrument 
     * @param {*} config has an object pos{x,y} and one variable tipoNota
     */
    sostenuto: function(instrument, config){
        /**
         * @param {*} x posicion x del player
         * @param {*} y posicion y del player
        */
        let auxSostenutoCreation = function(x,y, cdToAdd, wait){
            let sostenutoPos = {x:config.pos.x+x, y:config.pos.y+y};
            //Crearlo solo si esta dentro de la pantalla
            if(sostenutoPos.x >= 0 && sostenutoPos.x <7 && sostenutoPos.y >= 0 && sostenutoPos.y < 5){
                new Sostenuto(this.sceneRef, sostenutoPos, 1, config.tipoNota, wait);
            }
        }
        instrument.Play = AddToFunctionBefore(instrument.Play.bind(instrument), auxSostenutoCreation.bind(instrument));
    },
    vibrato: function(instrument, config){

        let createVibrato = function(x,y,cdToWait,wait,thisInstrument){
            //let vibratoPos;
            console.log(config);
            for(let i = 0; i < config.length; i++){
                console.log(config[i]);
                let vibratoPos = {x:config[i].x+x, y:config[i].y+y};
                if(vibratoPos.x >= 0 && vibratoPos.x <7 && vibratoPos.y >= 0 && vibratoPos.y < 5){
                    notasPool.Spawn("vibrato", vibratoPos.x,vibratoPos.y, 1);//new Vibrato(this.sceneRef, vibratoPos.x,vibratoPos.y, 1);
                }
            }
            //Crearlo solo si esta dentro de la pantalla
        }
        instrument.Play = AddToFunctionBefore(instrument.Play.bind(instrument), createVibrato.bind(instrument));
    },

    ancla: function(instrument, time){
        let auxAncla = function(x,y,cdToWait, wait, thisInstrument){
            thisInstrument.sceneRef.player.ancla = time + cdToWait;
        }
        instrument.Play = AddToFunctionAfter(instrument.Play.bind(instrument), auxAncla.bind(instrument));
    },

    syncopate: function(instrument, func){
        let myNewFunc = func(instrument);
        instrument.Syncopate = AddToFunctionAfter(instrument.Syncopate.bind(this), myNewFunc.bind(this));
    }, 
    tempo: function(instrument, func){
        let myNewFunc = func(instrument);
        instrument.Play = AddToFunctionBefore(instrument.Play.bind(this), myNewFunc.bind(this));
    }, 
    solo: function(instrument,func){
        var mySolistFunction;
        let myNewFunc = function(posX,posY){return function(){
            if(posX - instrument.sceneRef.player.position.x == 0 && posY - instrument.sceneRef.player.position.y==0){
                func(instrument);
            }else{
                instrument.cdCanBeReduced = true;
                instrument.actualCooldown = instrument.baseCooldown;
                //se movio
                clockInstance.eventEmitter.off("BeatNow", mySolistFunction, instrument);
            }
        }}
        //clockInstance.on("BeatNow", );
        
        let suscribe = function(){
            if(mySolistFunction) clockInstance.eventEmitter.off("BeatNow", mySolistFunction, instrument);
            mySolistFunction = myNewFunc(instrument.sceneRef.player.position.x, instrument.sceneRef.player.position.y);
            clockInstance.eventEmitter.on("BeatNow", mySolistFunction, instrument);
            instrument.cdCanBeReduced = false;
            //console.log(clockInstance.eventEmitter.listeners("BeatNow"));
        }
        instrument.Play = AddToFunctionAfter(instrument.Play.bind(this), suscribe.bind(this));
    }

}

export default instrumentEffects;