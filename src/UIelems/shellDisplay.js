const ShellUpdateEvent = 'updateshells';
export default class ShellDisplay extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {*} scene Escena en la que se muestra.
     * @param {*} shells Conchas del jugador.
     * @param 
     */
    constructor (scene,player){
        super(scene,1270,20,"shell"); //EL DEMONIO DE BABILONIA SE DISFRAZA CON EL MANTO DE LOS JUSTOS
        this.setDisplaySize(50,50);
        this.setOrigin(0,0);
        this.player = player;
        scene.add.existing(this);
        this.shelltext = this.scene.add.text(this.x,this.y,player.GetShells(),{ fontFamily: 'Arial', color: '#4EF', fontSize: '72px', fontFamily:"Grandstander" }).setOrigin(1,0.2);
        player.shellEmitter.on(ShellUpdateEvent, ()=>{
            this.shelltext.text = this.player.GetShells()
        });
    };

}