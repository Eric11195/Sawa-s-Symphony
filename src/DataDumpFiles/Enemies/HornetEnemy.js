import Enemy from "../../BoardUnits/enemy.js";
import Sostenuto from "../../BoardUnits/sostenuto.js";
import { notasPool } from "../../Scenes/combatScene.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const hornetEnemy = {
    startPosY: 0,
    name: "Hornet",
    bpm: 145,
    imagePath: "./assets/img/testEnemy.png",
    songPath: './assets/audio/Hollow_Knight_OST_Hornet',
    msSongStart: 300,
    enemyActions:[


        [0,2,0,2,0,2],
        [1,-1,2,-1,1,-2],
        [-1,2,-1,2,-1,-2],


    ]
};
export default hornetEnemy;