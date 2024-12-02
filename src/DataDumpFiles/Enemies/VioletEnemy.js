import Enemy from "../../BoardUnits/enemy.js";
import Sostenuto from "../../BoardUnits/sostenuto.js";
import { notasPool } from "../../Scenes/combatScene.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const violetEnemy = {
    startPosY: 0,
    name: "Violet",
    bpm: 160,
    imagePath: "./assets/img/Violet.png",
    songPath: './assets/audio/One-Step-From-Eden-Neverending-Song_-Violette_s-Theme',
    msSongStart: 300,
    enemyActions:[
        [0,2,0,2,0,2],
        [1,-1,2,-1,1,-2],
        [-1,2,-1,2,-1,-2],
    ]
};
export default violetEnemy;