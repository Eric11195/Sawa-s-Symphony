import DescriptionImages from "../UIelems/descriptionImages.js";
import RewardClass from "../DataDumpFiles/itemTypes.js";
export default class RewardImages extends DescriptionImages{
    index;
    constructor (scene, x, y, index, rclass){
        this.index = index;
        switch (rclass){
            case RewardClass.instrument:
                super(scene,x,y,"../../assets/img/instruments/"+InstrumentDataBase[index].nombre+".png",InstrumentDataBase[index].nombre, InstrumentDataBase[index].description);
            break;
            case RewardClass.upgrade:
                super(scene,x,y,"../../assets/img/upgrades/"+index+".png","","");
            break;
            case RewardClass.artifact:
                super(scene,x,y,"../../assets/img/artifacts/"+index+".png","","");
            break;
        }
    }
    getIndex = function(){
        return this.index;
    }
}
