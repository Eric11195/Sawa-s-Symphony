import Enemy from "../../BoardUnits/enemy.js";
import Sostenuto from "../../BoardUnits/sostenuto.js";
import { notasPool } from "../../Scenes/combatScene.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const bossEmemy = {
    startPosY: 2,
    height:1,
    name: "bossenemy",
    bpm: 78,
    imagePath: "./assets/img/testEnemy.png",
    songPath: './assets/audio/Brutal_Orchestra_OST_Primary_Colours',
    msSongStart: 330,
    enemyActions:
    [
        [
            function(enemy){       
                notasPool.Spawn("nota",6,0,-1,0);              
            },
        ],
        
        [
            function(enemy){    
              notasPool.Spawn("nota",6,1,-1,0);              
            },
        ],
      
        [
            function(enemy){       
              notasPool.Spawn("nota",6,2,-1,0);              
            },
        ],
     
        
        [
            function(enemy){     
              notasPool.Spawn("nota",6,3,-1,0);             
            },
        ],
        [
            function(enemy){    
              notasPool.Spawn("nota",6,4,-1,0);
            },
        ],[],
        [
            function(enemy){       
                notasPool.Spawn("nota",6,4,-1,0);              
            },
        ],
     
        [
            function(enemy){    
              notasPool.Spawn("nota",6,3,-1,0);              
            },
        ],
       
        [
            function(enemy){       
              notasPool.Spawn("nota",6,2,-1,0);              
            },
        ],
     
      
        [
            function(enemy){     
              notasPool.Spawn("nota",6,1,-1,0);             
            },
        ],
      
        [
            function(enemy){    
              notasPool.Spawn("nota",6,0,-1,0);
            },
        ],
     
        [
            function(enemy){       
                notasPool.Spawn("nota",6,0,-1,0);              
            },
        ],
     
        [
            function(enemy){    
              notasPool.Spawn("nota",6,1,-1,0);              
            },
        ],
     
        [
            function(enemy){       
              notasPool.Spawn("nota",6,2,-1,0);              
            },
        ],
     
      
        [
            function(enemy){     
              notasPool.Spawn("nota",6,3,-1,0);             
            },
        ],
       
        [
            function(enemy){    
              notasPool.Spawn("nota",6,4,-1,0);
            },
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],[
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ], 
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                //notasPool.Spawn("nota",6,0,-1,0);
            }
        ], 
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
               // notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0)
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                console.log("a");  
                
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,1,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
                
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,2,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
                notasPool.Spawn("nota",6,4,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,2,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
                           
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,1,-1,0);
               
            }
        ],
           ]
    
};
export default bossEmemy;