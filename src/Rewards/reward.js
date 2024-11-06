import RewardImages from "../UIelems/rewardImages.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import RewardClass from "../DataDumpFiles/itemClass.js";
export default class Reward{
   number;
   rclass;
   choicesIndexes = [];
   choicesImages = [];
   player;

    constructor(scene, position, rclass, number, player, remainingitems){
        this.number = number;
        this.rclass = rclass;
        this.player = player;
        /*switch (rclass){
            case RewardClass.instrument:
                break;
            case RewardClass.upgrade:
                break;
            case RewardClass.artifact:
                break;
        }*/
        for (let i = 0; i<number; i++){
            this.choicesIndexes.push(this.randomInst(remainingitems));
            let index = this.clicOnRewardFunc(this.choicesIndexes[i]);
            this.choicesImages.push(new RewardImages(scene, position.x+(50*i), position.y, this.choicesIndexes[i], rclass).setInteractive().on("pointerdown", index, this));
        }
        //console.log(this.choicesImages);
    }

    clicOnRewardFunc(index){
        return function(){
            /** @todo Do things*/
            //return index;
        }
    }

    randomInst = function(remainingitems){
        let index;
        do{
            index = Math.floor(Math.random() * (remainingitems.length));
        }while(this.choicesIndexes.includes(index));
        return index;
    }

}