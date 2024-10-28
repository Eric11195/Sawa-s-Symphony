import { AddToFunctionAfter, AddToFunctionBefore } from "../Utils/addToFunction.js";
import Instrument from "../Upgrades/instrument.js";
import Sostenuto from "../BoardUnits/sostenuto.js";

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
    }
}

export default instrumentEffects;