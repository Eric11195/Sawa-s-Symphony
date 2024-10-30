class Reward extends Phaser.GameObjects.Sprite(){
    position;
    price;
    constructor(scene,pos,imageID, price = 0){
        super(scene, Tile00PositionX(), Tile00PositionY(), imageID);
        this.price = price;
        scene.add.existing(this);
        if (this.price >0);
        this.position = {
            x: pos.x,
            y: pos.y
        }
    }
}