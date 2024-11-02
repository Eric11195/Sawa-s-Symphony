import RewardImages from "../UIelems/rewardImages.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import RewardClass from "../DataDumpFiles/itemTypes.js";
export default class Reward{
   number;
   rclass;
   choices = [];
   choiceInsts;
   player;

    constructor(scene, position, rclass, number, player, remainingitems){
        this.number = number;
        this.rclass = rclass;
        this.player = player;
        this.choiceInsts = [];
        /*switch (rclass){
            case RewardClass.instrument:
                break;
            case RewardClass.upgrade:
                break;
            case RewardClass.artifact:
                break;
        }*/
        for (let i = 0; i<number; i++){
            let item = randomInst(remainingitems);
            let index = this.storeIndex(item);
            this.choices.push(new RewardImages(scene, position.x+(50*i), position.y, item, rclass).setInteractive().on("pointerdown", index, this));
            this.choiceInsts.push(item);
        }
    }

    storeIndex(index){
        return function(){
            return index;
        }
    }

    randomInst = function(remainingitems){
        let index = Math.floor(Math.random() * (remainingitems.length()));
        let inst = remainingitems[index];
        let i = 0;
        while (i<choiceInsts.length() && inst != choiceInsts[i])i++;
        return (i == choiceInsts.length() ? inst : RandomInst());
    }

}