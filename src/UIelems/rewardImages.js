import DescriptionImages from "../UIelems/descriptionImages.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import artifactList from "../Upgrades/artifacts.js";
import RewardClass from "../DataDumpFiles/itemTypes.js";
export default class RewardImages extends DescriptionImages{
    index;
    constructor (scene, x, y, index, rclass){
        this.index = index;
        switch (rclass){
            case RewardClass.instrument:
                super(scene,x,y,InstrumentDataBase[index].nombre,InstrumentDataBase[index].nombre, InstrumentDataBase[index].description);
            break;
            case RewardClass.upgrade:
                super(scene,x,y,"../../assets/img/upgrades/"+InstrumentUpgrades[index].nombre+".png",InstrumentUpgrades[index].nombre, InstrumentUpgrades[index].description);
            break;
            case RewardClass.artifact:
                super(scene,x,y,"../../assets/img/artifacts/"+artifactList[index].nombre+".png",artifactList[index].nombre, artifactList[index].description);
            break;
        }
    }
    getIndex = function(){
        return this.index;
    }
}
