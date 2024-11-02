import DescriptionImages from "./descriptionImages.js";
class RewardImages extends DescriptionImages{
    index;
    constructor (scene, x, y, index, rclass){
        this.index = index;
        switch (rclass){
            case RewardClass.instrument:
                super(scene,x,y,"../../assets/img/i_"+index+".png",InstrumentDataBase[index].nombre, InstrumentDataBase[index].description);
            break;
            case RewardClass.upgrade:
                super(scene,x,y,"../../assets/img/u_"+index+".png","","");
            break;
            case RewardClass.artifact:
                super(scene,x,y,"../../assets/img/a_"+index+".png","","");
            break;
        }
    }
    getIndex(){
        return this.index;
    }

}
