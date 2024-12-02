import Enemy from "../../BoardUnits/enemy.js";
import Sostenuto from "../../BoardUnits/sostenuto.js";
import { notasPool } from "../../Scenes/combatScene.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const testEnemy = {
    startPosY: 0,
    name: "Violet",
    bpm: 160,
    imagePath: "./assets/img/Violet.png",
    songPath: './assets/audio/One-Step-From-Eden-Neverending-Song_-Violette_s-Theme',
    msSongStart: 300,
    enemyActions:[
        [],
        [],
        [],
        [/** @param {Enemy} enemy */
            function(enemy){
                notasPool.Spawn("nota",6,0,-1,0);      
            },/** @param {Enemy} enemy */
        ],
        [/** @param {Enemy} enemy */
            function(enemy){
                notasPool.Spawn("nota",6,1,-1,0);      
            }
        ],
        [/** @param {Enemy} enemy */
            function(enemy){
                notasPool.Spawn("nota",6,2,-1,0);      
            },/** @param {Enemy} enemy */
            function(enemy){
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 180, callback: function(){
                    notasPool.Spawn("nota",6,3,-1,0);
                }});
            },
        ]
    ]
};
export default testEnemy;