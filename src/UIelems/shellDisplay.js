const UpdateShells = 'updateshells';
export default class ShellDisplay extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {*} scene Escena en la que se muestra.
     * @param {*} shells Conchas del jugador.
     */
    constructor (scene,shells){
        super(scene,500,0,"shell"); //EL DEMONIO DE BABILONIA SE DISFRAZA CON EL MANTO DE LOS JUSTOS
        this.setDisplaySize(200,200)
        console.log(this);  
        this.setOrigin(0,0);
        this.shellcount = shells;
        this.shelltext = this.scene.add.text(this.x,this.y,this.shellcount,{ fontFamily: 'Arial', color: '#4EF', fontSize: '72px', fontFamily:"Grandstander" }).setOrigin(1,0);
        this.on('updateshells', this.ShellUpdate);
    }
    /**
     * 
     * @param {*} shellta Delta de shells.
     */
    ShellUpdate(shellta){
        this.shellcount += shellta;
        shelltext.text = this.shellcount;
    }
}