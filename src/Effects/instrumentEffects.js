import { AddToFunctionAfter, AddToFunctionBefore } from "../Utils/addToFunction.js";
import Instrument from "../Upgrades/instrument.js";
import Sostenuto from "../BoardUnits/sostenuto.js";
import Vibrato from "../Projectiles/vibrato.js";

const instrumentEffects = {
    /**
     * @param {Instrument} instrument 
     */
    move: function(instrument, move){
        let auxMove = function(){
            this.sceneRef.player.NormalMove(move.x,move.y);
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

        let createVibrato = function(x,y){
            let vibratoPos = {x:config.x+x, y:config.y+y};
            //Crearlo solo si esta dentro de la pantalla
            if(vibratoPos.x >= 0 && vibratoPos.x <7 && vibratoPos.y >= 0 && vibratoPos.y < 5){
                new Vibrato(this.sceneRef, vibratoPos.x,vibratoPos.y, 1);
            }
        }
        instrument.Play = AddToFunctionBefore(instrument.Play.bind(instrument), createVibrato.bind(instrument));
    },

    ancla: function(instrument, time){
        let auxAncla = function(){
            this.sceneRef.player.ancla = time;
            //console.log(this.sceneRef.player.ancla);
        }
        instrument.Play = AddToFunctionAfter(instrument.Play.bind(instrument), auxAncla.bind(instrument));
       
    }
}

export default instrumentEffects;