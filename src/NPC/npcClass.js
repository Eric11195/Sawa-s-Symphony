export default class npcClass extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {*} scene 
     * @param {*} config El objeto de config tiene que tener string name, int posX, int posY, string [] dialogo
     * rewards[] rewards
     */
    constructor(scene, config){
        super(scene,config.posX,config.posY,config.name);
        scene.add.existing(this);
        console.log(this);
        this.setDisplaySize(100,100);
        this.name = config.name;
        this.dialogo = config.dialogo;
        this.rewards = config.rewards;
        this.setInteractive().on(
            "pointerdown",
            this.TalkToNPC,
            this
        );
    }

    TalkToNPC(){
        this.removeInteractive();
        /**@todo hacer que todo el resto de NPC no puedan clicarse*/
        this.fondo = this.scene.add.image(0,0,this.name+"Fondo").setOrigin(0,0).setDisplaySize(1320,720);
        this.returnButton = this.scene.add.image(1000,500, "returnButton").setDisplaySize(100,100).setInteractive().on("pointerdown", this.CloseNPCMenu, this);
    }

    CloseNPCMenu(){
        this.fondo.destroy();
        this.returnButton.destroy();
        this.preFX.addColorMatrix().grayscale(1);
    }

    

}