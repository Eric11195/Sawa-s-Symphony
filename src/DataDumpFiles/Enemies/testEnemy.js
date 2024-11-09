import Enemy from "../../BoardUnits/enemy.js";
import Sostenuto from "../../BoardUnits/sostenuto.js";
import Nota from "../../Projectiles/nota.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const testEnemy = {
    startPosY: 2,
    name: "testEnemy",
    bpm: 78,
    imagePath: "./assets/img/testEnemy.png",
    songPath: './assets/audio/Brutal_Orchestra_OST_Primary_Colours',
    msSongStart: 330,
    enemyActions:[
        [//Compas 1
            /** @param {Enemy} enemy */
            function(enemy){
                /**
                 * delay in ms from beat till actions is done
                 * callback function to be done
                 */
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 0, callback: function(){
                    new Nota(this.scene,6,1,0,-1);
                }});
            },//fin acción 1
            function(enemy){
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 300, callback: function(){
                    new Nota(this.scene,6,2,0,-1);
                }});
            },//fin acción 2
        ],
        [//Compas 2
            function(enemy){
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 0, callback: function(){
                    this.Move(0,1);
                }});
            },
        ],
        [//Compas 3
            function(enemy){
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 0, callback: function(){
                    new Sostenuto(this.scene,{x:6,y:3}, -1, 2);
                }});
            },
        ]
    ]
};
export default testEnemy;