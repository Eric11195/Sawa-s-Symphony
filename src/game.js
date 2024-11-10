import CombatScene from "./Scenes/combatScene.js";
import MainMenuScene from "./Scenes/mainMenu.js";
import RewardsLobbyScene from "./Scenes/rewardsLobbyScene.js";
import RewardsScene from "./Scenes/rewardsScene.js";
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
    scene: [MainMenuScene , CombatScene, RewardsScene, RewardsLobbyScene],    // Decimos a Phaser cual es nuestra escena
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