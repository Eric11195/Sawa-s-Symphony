export default class DescriptionImages extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} imageId 
     * @param {string} title 
     * @param {string} description 
     */
    constructor(scene,x,y,imageId, title, description){
        super(scene,300,300,imageId);
        scene.add.existing(this);
        //this.setToTop();
        //scene.children.bringToTop(this);
        this.setInteractive();

        this.descriptor =  scene.add.rectangle( 0, 0, 250, 50, 0xff0000).setOrigin(0);
        this.descriptorTitle = scene.add.text( 0, 0, title, { fontFamily: 'Arial', color: '#000' }).setOrigin(0);
        this.descriptorDescription = scene.add.text( 0, 0, description, { fontFamily: 'Arial', color: '#000' }).setOrigin(0);
        this.descriptor.alpha = 0;
        this.descriptorTitle.alpha = 0;
        this.descriptorDescription.alpha = 0;

        scene.input.setPollOnMove();

        this.on('pointerover',function(pointer,x,y){
            scene.tweens.add({
                targets: [this.descriptor, this.descriptorDescription, this.descriptorTitle],
                alpha: {from:0, to:1},
                repeat: 0,
                duration: 100
            });
        });
        this.on('pointerout', function(pointer){
            console.log(this.depth);
            this.descriptor.alpha = 0;
            this.descriptorTitle.alpha = 0;
            this.descriptorDescription.alpha = 0;
        });

        this.on('pointermove',function(pointer){
            this.descriptor.x = pointer.x+30;
            this.descriptor.y = pointer.y+30;
            this.descriptorTitle.x = pointer.x + 35;
            this.descriptorTitle.y = pointer.y + 40;
            this.descriptorDescription.x = pointer.x+35;
            this.descriptorDescription.y = pointer.y+60;
        })
    }
}