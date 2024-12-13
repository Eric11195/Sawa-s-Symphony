import { canClick, setCanClick } from "../../Utils/ClickInhibitor.js";

export default class FlappyBird extends Phaser.GameObjects.Image{

    constructor(scene,x,y){
        super(scene,x,y,"sawa");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setDisplaySize(60,60);
        this.body.setSize(50, 50, true);
        this.body.setGravityY(1500);

        this.scene.input.on('pointerdown', this.Jump, this);
        setCanClick(false);
        //this.Jump();
    }

    Jump(){
        this.body.setVelocityY(-650);
    }

    Die(){
        setCanClick(true);
        this.scene.input.removeListener("pointerdown", this.Jump, this);
        this.destroy();
    }
}