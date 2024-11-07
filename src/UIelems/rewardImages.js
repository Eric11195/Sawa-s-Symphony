import DescriptionImages from "../UIelems/descriptionImages.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import artifactList from "../Upgrades/artifacts.js";
import RewardClass from "../DataDumpFiles/itemClass.js";
export default class RewardImages extends DescriptionImages{
    constructor (scene, x, y, index, rclass){
        switch (rclass){
            case RewardClass.instrument:
                super(scene,x,y,InstrumentDataBase[index].nombre,InstrumentDataBase[index].nombre, InstrumentDataBase[index].description);
            break;
            case RewardClass.upgrade:
                super(scene,x,y,InstrumentUpgrades[index].nombre,InstrumentUpgrades[index].nombre, InstrumentUpgrades[index].description);
            break;
            case RewardClass.artifact:
                super(scene,x,y,artifactList[index].nombre,artifactList[index].nombre, artifactList[index].description);
            break;
        }
        this.setDisplaySize(100,100);
    }
}
