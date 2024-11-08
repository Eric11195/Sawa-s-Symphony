import CombatScene from "./Scenes/combatScene.js";
import MainMenu from "./Scenes/mainMenu.js";
import Preloader from "./Scenes/preloader.js";
/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    width:  1320,
    height: 720,
    pixelArt: true,
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    scene: [Preloader,MainMenu , CombatScene],    // Decimos a Phaser cual es nuestra escena
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 0 }, 
            debug: true 
        } 
    },
    parent:"game"

};

new Phaser.Game(config);