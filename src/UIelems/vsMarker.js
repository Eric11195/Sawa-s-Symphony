export default class vsMarker extends Phaser.GameObjects.Sprite{
    constructor(scene, leftMostPos, rightMostPos){
        super(scene,leftMostPos.x + (rightMostPos.x-leftMostPos.x)/2, rightMostPos.y, "vsMarker");
        scene.add.existing(this);
        this.leftMost = leftMostPos.x;
        this.totalX = rightMostPos.x-leftMostPos.x;
    }

    UpdatePos(playerMark,enemyMark){
        this.x = this.leftMost + this.totalX *(playerMark/(playerMark+enemyMark));
    }
}