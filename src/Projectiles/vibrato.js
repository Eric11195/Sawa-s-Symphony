import BaseProjectile from './baseprojectile.js';


class VibratoProjectile extends BaseProjectile {


    constructor (scene, posX, posY, direction) {
        super(scene, posX, posY, direction, 'vibrato');
        //this.setScale(2, 2);
        //this.setOrigin(0, 0.75);
        this.silent = 1;
        this.speed = 2;
        this.AddKeyword({vibrato:null});
        this.acceptsKeywords = false;
    }

    
}

export default VibratoProjectile;