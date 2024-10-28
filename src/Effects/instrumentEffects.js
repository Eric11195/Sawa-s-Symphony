import { AddToFunctionAfter, AddToFunctionBefore } from "../Utils/addToFunction.js";
import Instrument from "../Upgrades/instrument.js";

const instrumentEffects = {
    /**
     * 
     * @param {Instrument} instrument 
     */
    move: function(instrument, move){
        instrument.Play = AddToFunctionBefore(instrument.Play.bind(instrument), auxMovePlayerPredetermined(move.x,move.y).bind(instrument));
    }
}


function auxMovePlayerPredetermined(x,y){
    console.log(x,y)
    return function(){
        this.sceneRef.player.NormalMove(x,y);
    }
}

export default instrumentEffects;