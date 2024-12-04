
import Enemy from "../../BoardUnits/enemy.js";
import Sostenuto from "../../BoardUnits/sostenuto.js";
import { notasPool } from "../../Scenes/combatScene.js";


/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const bossEmemy = {
    startPosY: 2,
    height:1,
    name: "bossEnemy",
    bpm: 164,
    imagePath: "./assets/img/testEnemy.png",
    songPath: './assets/audio/Ganon-Rosario-Dale_-Zelda_-Dale-_Tema-Oficial_',
    msSongStart: 330,
    enemyActions:
    [  
       //1 Hall
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,-1,-1,1,1,0],
       [1,-1,-1,1,1,0],
       [1,-1,1,1,1,-1],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,-1,1,1,0],
       [1,-1,-1,1,1,1],
       [1,1,-1,-1,1,0],
       [1,1,-1,-1,1,1],
       [1,1,1,-1,1,0],
       [1,1,1,-1,1,0],
       [1,1,1,-1,1,0],
       [1,1,1,-1,1,0],
       [1,1,1,-1,1,0],
       [1,1,1,-1,1,0],
       [1,1,-1,-1,1,-1],
       [1,-1,-1,-1,1,0],
       [1,-1,-1,1,1,-1],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,1,1,1,0],
       [1,-1,-1,1,1,0],
       [1,-1,-1,1,1,1],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [1,1,-1,1,1,0],
       [-1,-1,-1,-1,-1,0],
       [1,-1,-1,-1,1,0],
       [-1,-1,-1,-1,-1,0],
       [-1,-1,-1,-1,-1,0],
         
        
        //principio
        [-1,-1,0,-1,-1,0],
        [-1,-1,0,-1,-1,0],
        [-1,-1,0,-1,-1,0],
        [-1,-1,0,-1,-1,0],
        [-1,0,-1,0,-1,0],
        [-1,0,-1,0,-1,0],
        [-1,0,-1,0,-1,0],
        [-1,0,-1,0,-1,0],
        //Wooo!
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [-1,-1,-1,-1,1,0],
        //subida 2 veces
        [-1,-1,-1,1,2,0],
        [-1,-1,1,-1,2,0],
        [-1,1,-1,-1,2,0],
        [1,-1,-1,-1,2,0],
        [-1,-1,-1,1,2,0],
        [-1,-1,1,-1,2,0],
        [-1,1,-1,-1,2,0],
        [1,-1,-1,-1,2,0],
        //Bajada 2 veces
        [2,-1,-1,-1,-1,0],
        [2,1,-1,-1,-1,0],
        [2,-1,1,-1,-1,0],
        [2,-1,-1,1,-1,0],
        [2,-1,-1,-1,1,0],
        [2,1,-1,-1,-1,0],
        [2,-1,1,-1,-1,0],
        [2,-1,-1,1,-1,0],
        [2,-1,-1,-1,1,0],
        //Siguiente (ns como llamarlo)
        [1,-1,1,-1,1,0],
        [-1,-1,-1,-1,-1,0],
        [1,1,-1,1,1,0],
        [-1,-1,-1,-1,-1,0],
        [1,-1,1,-1,1,0],
        [-1,-1,-1,-1,-1,0],
        [1,1,-1,1,1,0],
        [-1,-1,-1,-1,-1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,1,1,-1,0],
        //ejemplo
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,1,1,1,0],
        [1,1,-1,-1,1,0],
        [-1,-1,-1,-1,1,0],
        [1,1,-1,-1,1,0],
        [-1,-1,1,1,1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,1,1,1,0],
        [1,1,-1,-1,1,0],
        [-1,-1,1,1,1,0],
        //Cosa de Izan
        [1,-1,-1,-1,1,0],
        [1,1,-1,-1,-1,0],
        [2,1,1,-1,-1,0],
        [2,2,1,1,-1,-1],
        //esperar 1 beat
        [-1,-1,-1,-1,-1,0],
        
        //Z
        [1,-1,-1,1,-1,0],
        [1,-1,1,1,-1,0],
        [1,1,-1,1,-1,0],
        //O
        [1,1,1,1,-1,0],
        [1,-1,-1,1,-1,0],
        [1,1,1,1,-1,0],
        //R
        [1,1,1,1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        //A
        [1,1,1,1,-1,0],
        [1,-1,1,-1,-1,0],
        [1,1,1,1,-1,0],
        [-1,-1,-1,-1,-1,1],
               


        //Ola de notas pequeña
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,-1,1,-1,0],
        [-1,-1,1,-1,-1,0],

        //Descansa 1 beat
        [-1,-1,-1,-1,-1,0],

        //ola mas grande medio
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,-1,1,-1,0],
        [-1,-1,1,-1,-1,0],

        //Movimiento sin notas, a modo de descanso de 1 beat
        [-1,-1,-1,-1,-1,1],

        //ola movida uno abajo
        [-1,-1,-1,1,-1,0],
        [-1,-1,1,-1,1,0],
        [-1,1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [-1,-1,1,-1,1,0],
        [-1,-1,-1,1,-1,0],

        //Movimiento sin notas, a modo de descanso de 1 beat
        [-1,-1,-1,-1,-1,-1],

        //ola medio
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,-1,1,-1,0],
        [-1,-1,1,-1,-1,0],

        //Movimiento sin notas, a modo de descanso de 1 beat
        [-1,-1,-1,-1,-1,-1],

        //ola movida uno arriba
        [-1,1,-1,-1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,1,-1,-1,-1,0],


        //Movimiento sin notas, a modo de descanso de 1 beat
        [-1,-1,-1,-1,-1,1],
        //Movimiento sin notas, a modo de descanso de 1 beat
        [-1,-1,-1,-1,-1,0],


        //medio
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,-1,1,-1,0],
        [-1,-1,1,-1,-1,1],

        //ola movida uno abajo
        [-1,-1,-1,1,-1,0],
        [-1,-1,1,-1,1,0],
        [-1,1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [-1,-1,1,-1,1,0],
        [-1,-1,-1,1,-1,1],

        //ola movida abajo del todo
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [-1,-1,1,-1,-1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,-1,-1,1,-1],

        //ola movida uno abajo
        [-1,-1,-1,1,-1,0],
        [-1,-1,1,-1,1,0],
        [-1,1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [-1,-1,1,-1,1,0],
        [-1,-1,-1,1,-1,-1],

        //ola medio
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,-1,1,-1,0],
        [-1,-1,1,-1,-1,-1],

        //ola movida uno arriba
        [-1,1,-1,-1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,1,-1,-1,-1,-1],

        //ola arriba del todo
        [1,-1,-1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [-1,-1,1,-1,-1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,-1,-1,0],
        [1,-1,-1,-1,-1,1],

        //ola movida uno arriba
        [-1,1,-1,-1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,-1,-1,1,-1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,-1,1,0],
        [-1,-1,-1,1,-1,0],
        [1,-1,1,-1,-1,0],
        [-1,1,-1,-1,-1,1],

        //ola medio
        [-1,-1,1,-1,-1,0],
        [-1,1,-1,1,-1,0],
        [1,-1,-1,-1,1,0],
        [1,-1,-1,-1,1,0],
        [-1,1,-1,1,-1,0],
        [-1,-1,1,-1,-1,0],

    ]
        /*//ta ,ta, ta ,ta
        [
            function(enemy)
             {                
                 notasPool.Spawn("nota",6,2,-1,0);
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
                 notasPool.Spawn("nota",6,2,-1,0);
             }
        ],
        [
            function(enemy)
             {                
                 notasPool.Spawn("nota",6,2,-1,0);
             }
        ],
        //ta, ta , ta ,ta 2
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
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ], [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ], [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        //wooooooh,
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
                notasPool.Spawn("nota",6,4,-1,0);
            }
        ], [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ], [
            function(enemy)
            {
                notasPool.Spawn("nota",6,3,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
                notasPool.Spawn("nota",6,4,-1,0);
                notasPool.Spawn("nota",6,0,-1,0);
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
                notasPool.Spawn("nota",6,2,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,4,-1,0);
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
                notasPool.Spawn("nota",6,1,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,0,-1,0);
            }
        ],
        //ta, tara, tara, tarata ta, tara tara tarata ta.....
        //ta
        [
            function(enemy)
             {                
                 notasPool.Spawn("nota",6,2,-1,0);
             }
        ],
        [],
        //tara
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,1,-1,0);
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 200, callback: function(){
                   notasPool.Spawn("nota",6,3,-1,0).AddKeyword(this.noteKeywords);}})
                  
                
            }
        ],
        [],
        [
            function(enemy)
             {
                 notasPool.Spawn("nota",6,3,-1,0);
                 enemy.scene.time.addEvent({ callbackScope: enemy, delay: 200, callback: function(){
                    notasPool.Spawn("nota",6,1,-1,0).AddKeyword(this.noteKeywords);}})
                   
                 
             }
        ],
        [],
        //tarara
        [
            function(enemy){       
                notasPool.Spawn("nota",6,0,-1,0);              
            }, 
        ],
        [
            function(enemy){       
                notasPool.Spawn("nota",6,2,-1,0);              
            }, 
        ],
        [
            function(enemy){       
                notasPool.Spawn("nota",6,4,-1,0);              
            }, 
        ],
        //ta
        [
            function(enemy)
             {                
                 notasPool.Spawn("nota",6,2,-1,0);
             }
        ],
        [],
        //tara
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,1,-1,0);
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 200, callback: function(){
                   notasPool.Spawn("nota",6,3,-1,0).AddKeyword(this.noteKeywords);}})
                  
                
            }
        ],
        [],
        [
            function(enemy)
             {
                 notasPool.Spawn("nota",6,3,-1,0);
                 enemy.scene.time.addEvent({ callbackScope: enemy, delay: 200, callback: function(){
                    notasPool.Spawn("nota",6,1,-1,0).AddKeyword(this.noteKeywords);}})
                   
                 
             }
        ],
        [],
        //tarara
        [
            function(enemy){       
                notasPool.Spawn("nota",6,0,-1,0);              
            }, 
        ],
        [
            function(enemy){       
                notasPool.Spawn("nota",6,2,-1,0);              
            }, 
        ],
        [
            function(enemy){       
                notasPool.Spawn("nota",6,4,-1,0);              
            }, 
        ],
        //se acaba lo anterior
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
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,0,-1,0);
                notasPool.Spawn("nota",6,2,-1,0);
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
           }
        ],
        [
            function(enemy)
            {
                enemy.Move(0,-2);
              
            }
        ],
        [
            function(enemy)
            {
                enemy.Move(0,2)
            }
        ],
       
        [
            function(enemy)
            {
                enemy.Move(0,2)
            }
        ],
        [
            function(enemy)
            {
                enemy.Move(0,-2)
            }
        ],
        //Escribe Zora
        //Z
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,0,-1,0);
                notasPool.Spawn("nota",6,3,-1,0);
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,0,-1,0);
                notasPool.Spawn("nota",6,2,-1,0);
                notasPool.Spawn("nota",6,3,-1,0);
                
            }
        ],
        [
            function(enemy)
            {
                notasPool.Spawn("nota",6,0,-1,0);
                notasPool.Spawn("nota",6,1,-1,0);
                notasPool.Spawn("nota",6,3,-1,0);
            }
        ],
       //O
       [
        function(enemy)
        {
            notasPool.Spawn("nota",6,0,-1,0);
            notasPool.Spawn("nota",6,1,-1,0);
            notasPool.Spawn("nota",6,2,-1,0);
            notasPool.Spawn("nota",6,3,-1,0);
        }
    ],
    [
        function(enemy)
        {
            notasPool.Spawn("nota",6,0,-1,0);
           
            notasPool.Spawn("nota",6,3,-1,0);
        }
    ],
    [
        function(enemy)
        {
            notasPool.Spawn("nota",6,0,-1,0);
            notasPool.Spawn("nota",6,1,-1,0);
            notasPool.Spawn("nota",6,2,-1,0);
            notasPool.Spawn("nota",6,3,-1,0);
        }
    ],
    //R
    [
        function(enemy)
        {
            notasPool.Spawn("nota",6,0,-1,0);
            notasPool.Spawn("nota",6,1,-1,0);
            notasPool.Spawn("nota",6,2,-1,0);
            notasPool.Spawn("nota",6,3,-1,0);
        }
    ],
    [
        function(enemy)
        {
            notasPool.Spawn("nota",6,0,-1,0);
           
            notasPool.Spawn("nota",6,2,-1,0);
           
        }
    ],
    [
        function(enemy)
        {
           
            notasPool.Spawn("nota",6,1,-1,0);
           
            notasPool.Spawn("nota",6,3,-1,0);
        }
    ],
   //A
   [
    function(enemy)
    {
        notasPool.Spawn("nota",6,0,-1,0);
        notasPool.Spawn("nota",6,1,-1,0);
        notasPool.Spawn("nota",6,2,-1,0);
        notasPool.Spawn("nota",6,3,-1,0);
    }
    ],
    [
    function(enemy)
     {
         notasPool.Spawn("nota",6,0,-1,0);
         
         notasPool.Spawn("nota",6,2,-1,0);
        
     }
    ],
    [
        function(enemy)
         {
             notasPool.Spawn("nota",6,0,-1,0);
             notasPool.Spawn("nota",6,1,-1,0);
             notasPool.Spawn("nota",6,2,-1,0);
             notasPool.Spawn("nota",6,3,-1,0);
         }
        ],*/
    

    
    
};
export default bossEmemy;