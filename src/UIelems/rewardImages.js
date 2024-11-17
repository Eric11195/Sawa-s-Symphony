import DescriptionImages from "../UIelems/descriptionImages.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import artifactList from "../DataDumpFiles/artifacts.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
export default class RewardImages extends DescriptionImages{
    constructor (scene, x, y, index, rclass, price = 0){
        switch (rclass){
            case RewardClass.instrument:
                super(scene,x,y,InstrumentDataBase[index].nombre,InstrumentDataBase[index].nombre, InstrumentDataBase[index].description);
            break;
            case RewardClass.upgrade:
                super(scene,x,y,InstrumentUpgrades[index].nombre,InstrumentUpgrades[index].nombre, InstrumentUpgrades[index].description);
            break;
            case RewardClass.artifact:
                console.log();
                super(scene,x,y,artifactList[index].nombre,artifactList[index].nombre, artifactList[index].description);
            break;
        }
        this.setDisplaySize(100,100);
        if (price>0){
            this.shellrect = this.scene.add.rectangle(x,y+63,80,30,0xffffff);
            this.shelltext = this.scene.add.text(x, y+45, price,{ fontFamily: 'Arial', color: '#e69138', fontSize: '32px', fontFamily:"Grandstander" }).setOrigin(1,0);
            this.shellimage = this.scene.add.image(x, y+47,"shell").setOrigin(0,0);
        }
    }
    RemoveShellUI(){
        this.shellrect.destroy();
        this.shelltext.destroy();
        this.shellimage.destroy();
    }
}
