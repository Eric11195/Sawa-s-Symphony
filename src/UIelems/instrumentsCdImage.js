import DescriptionImages from "./descriptionImages.js";
import {InstrumentCdImage0Pos, InstrumentCdImageDiffX} from "../Utils/screenPositions.js";

export default class InstrumentsCdImage extends DescriptionImages{

    constructor(scene, instrument, instrumentNumber){
        /**@todo check what instrument is this */
        super(scene,(instrumentNumber*InstrumentCdImageDiffX() + InstrumentCdImage0Pos().x),InstrumentCdImage0Pos().y, instrument.nombre, instrument.nombre, instrument.description);
        this.setDisplaySize(100,100);  
        this.fx = this.preFX.addColorMatrix();
        this.cdNumbers = scene.add.text( this.x-15, this.y-35, "", { fontFamily: 'Arial', fontSize: '60px', fontFamily:"Grandstander",stroke: '#000000',strokeThickness: 10,}).setTint(0xff8343);
        this.UpdateCd(0);
    }

    UpdateCd(cd){
        if(cd<1){
            this.cdNumbers.alpha = 0;
            this.fx.reset();
        }else{
            this.cdNumbers.text = cd;
            this.cdNumbers.alpha = 1;
            this.fx.grayscale(1);
        }
    }
}