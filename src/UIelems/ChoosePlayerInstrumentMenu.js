import RewardClass from "../DataDumpFiles/RewardClass.js";

export default class ChoosePlayerInstrumentMenu{
    constructor(player, returnFunction){
        for (let i = 0; i<3; i++){
            //let index = this.clicOnRewardFunc(this.choicesIndexes[i]);
            let functionCallback = function(){
                return function(){
                    returnFunction(i);
                }
            }
            this.choicesImages.push(new descriptionImages(scene, i*1320/4, 500, player.instrumentos[i].nombre, player.instrumentos[i].nombre, player.instrumentos[i].description).setInteractive().on("pointerdown", functionCallback, player));
        }
    }
}