import RewardImages from "../UIelems/rewardImages.js"
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
const RewardClass = {
    instrument: 'instrument',
    upgrade: 'upgrade',
    artifact: 'artifact'
}
class Reward{
   number;
   rclass;
   choices = [];
   choiceInsts;
   player;

    constructor(scene, position, rclass, number, player, remainingitems){
        //super(scene, Tile00PositionX(), Tile00PositionY())
        this.number = number;
        this.type = type;
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
            this.choices.push(new RewardImages(scene, position.x+(50*i), position.y, item, rclass));
            this.choiceInsts.push(item);
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