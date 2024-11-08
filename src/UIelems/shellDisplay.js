const UpdateShells = 'updateshells';
export default class ShellDisplay extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {*} scene Escena en la que se muestra.
     * @param {*} shells Conchas del jugador.
     */
    constructor (scene,shells){
        super(scene,1260,0,"shell");

        this.setOrigin(0,0);
        this.shellcount = shells;
        this.shelltext = this.scene.add.text(this.x,this.y,this.shellcount,{ fontFamily: 'Arial', color: '#4EF', fontSize: '72px', fontFamily:"Grandstander" }).setOrigin(1,0);
        this.on('updateshells', this.ShellUpdate);
    }
    /**
     * 
     * @param {*} shellta Cambio de shells.
     */
    ShellUpdate(shellta){
        this.shellcount += shellta;
        shelltext.text = this.shellcount;
    }
}