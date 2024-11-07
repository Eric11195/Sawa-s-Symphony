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
        super(scene,x,y,imageId);
        scene.add.existing(this);
        this.setInteractive();

        this.descriptor =  scene.add.rectangle( 0, 0, 220, 40+17*(description).split(/\r\n|\r|\n/).length, 0x179bae).setOrigin(0);
        this.descriptorTitle = scene.add.text( 0, 0, title, { fontFamily: 'Arial', color: '#000', fontSize: '18px', fontFamily:"Grandstander" }).setOrigin(0);
        this.descriptorDescription = scene.add.text( 0, 0, description, { fontFamily: 'Arial', color: '#000',fontSize: '16px', fontFamily:"Grandstander"  }).setOrigin(0);
        this.descriptor.alpha = 0;
        this.descriptorTitle.alpha = 0;
        this.descriptorDescription.alpha = 0;

        scene.input.setPollOnMove();

        this.on('pointerover',function(pointer,x,y){
            this.descriptor.alpha = 1;
            this.descriptorTitle.alpha = 1;
            this.descriptorDescription.alpha = 1;
        });
        this.on('pointerout', function(pointer){
            this.descriptor.alpha = 0;
            this.descriptorTitle.alpha = 0;
            this.descriptorDescription.alpha = 0;
        });

        this.on('pointermove',function(pointer){
            this.descriptor.x = pointer.x+15;
            this.descriptor.y = pointer.y+15;
            this.descriptorTitle.x = pointer.x + 20;
            this.descriptorTitle.y = pointer.y + 25;
            this.descriptorDescription.x = pointer.x+20;
            this.descriptorDescription.y = pointer.y+45;
        })
    }
}