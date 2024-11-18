import {currentShells, AddShells } from "../Rewards/RewardsLeft.js";

const SHELL_UPDATE_EVENT = 'updateshells';
export {SHELL_UPDATE_EVENT};
export default class ShellDisplay extends Phaser.GameObjects.Image{
    /**
     * 
     * @param {*} scene Escena en la que se muestra.
     * @param {*} shells Conchas del jugador.
     * @param 
     */
    constructor (scene){
        super(scene,1270,20,"shell"); //EL DEMONIO DE BABILONIA SE DISFRAZA CON EL MANTO DE LOS JUSTOS
        this.setDisplaySize(50,50);
        this.setOrigin(0,0);
        scene.add.existing(this);
        this.shelltext = this.scene.add.text(this.x,this.y,currentShells,{ fontFamily: 'Arial', color: '#4EF', fontSize: '72px', fontFamily:"Grandstander" }).setOrigin(1,0.2);
        scene.events.on(SHELL_UPDATE_EVENT, (shellMod)=>{
            AddShells(shellMod);
            this.shelltext.text = currentShells;
        });
        this.depth = 10;
        this.shelltext.depth = 10;
    };

    PrepareToBeDeleted(){

    }

}