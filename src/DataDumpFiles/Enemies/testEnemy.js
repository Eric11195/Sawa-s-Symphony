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
        [
            /** @param {Enemy} enemy */
            function(enemy){
                /**
                 * delay in ms from beat till actions is done
                 * callback function to be done
                 */
               new Nota(enemy.scene,6,2,0,-1)            
            },
        ],
        [
            function(enemy){                
            enemy.Move(0,-1);                
            },
        ],
        [
            function(enemy){               
              enemy.Move(0,-1)                
            },
        ],
        [
            function(enemy){                
                enemy.Move(0,1)              
            },
        ],
        [
            function(enemy){              
              enemy.Move(0,1)              
            },
        ],
        [
            function(enemy){ 
            },
        ],
        [
            function(enemy){
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 0, callback: function(){
                    new Nota(this.scene,6,3,0,-1)
                    new Nota(this.scene,6,1,0,-1)
                    new Nota(this.scene,6,2,0,-1)
                }});
            },
        ],
        [
            function(enemy){ 
            },
        ],
        [
            function(enemy){
                enemy.scene.time.addEvent({ callbackScope: enemy, delay: 0, callback: function(){
                   this.Move(0,-1)
                }});
            },
        ], [
            function(enemy){               
                  enemy.Move(0,-1)                 
            },
        ],                
                //new Nota(enemy.scene,6,0,0,-1).AddKeyword({adagio:null}) para adagio
        [
            function(enemy){                
                new Nota(enemy.scene,6,0,0,-1)                
            },
        ],
        [
            function(enemy){                
                enemy.Move(0,1);                
            },
        ],
        [
            function(enemy){               
              new Nota(enemy.scene,6,1,0,-1)                
            },
        ],
        [
            function(enemy){                
              enemy.Move(0,1)                
            },
        ],
        [
            function(enemy){               
              new Nota(enemy.scene,6,2,0,-1)               
            },
        ],
     
        [
            function(enemy){               
                enemy.Move(0,1)              
            },
        ],
        [
            function(enemy){               
              new Nota(enemy.scene,6,3,0,-1)               
            },
        ],
        [
            function(enemy){               
               enemy.Move(0,1)                 
            },
        ],
        [
            function(enemy){              
            new Nota(enemy.scene,6,4,0,-1)  
            },
        ],
        [
            function(enemy){
            },
        ],
        [
            function(enemy){
                new Nota(enemy.scene,6,4,0,-1)
            },
        ],
        [
            function(enemy){  
            enemy.Move(0,-1) 
            },
        ],[
            function(enemy){
                new Nota(enemy.scene,6,3,0,-1)
            },
        ],
        [
            function(enemy){
              enemy.Move(0,-1)
            },
        ],
        [
            function(enemy){
                new Nota(enemy.scene,6,2,0,-1)
            },
        ],
        [
            function(enemy){
                enemy.Move(0,-1)
            },
        ],
        [
            function(enemy){ 
            new Nota(enemy.scene,6,1,0,-1)
            },
        ],
        [
            function(enemy){
              enemy.Move(0,-1) 
            },
        ],
        [
            function(enemy){
                new Nota(enemy.scene,6,0,0,-1)
            },
        ],
        [
            function(enemy){
            },
        ],
        [
            function(enemy){
              enemy.Move(0,1)  
            },
        ],
        [
            function(enemy){
 
          enemy.Move(0,1)     
            },
        ],
        [
            function(enemy){   
            },
        ],
        [
            function(enemy){ 
          new Nota(enemy.scene,6,2,0,-1).AddKeyword({adagio:null})    
            },
        ],
        [
            function(enemy){ 
                enemy.Move(0,-1)     
            },
        ],
        [
            function(enemy){
                enemy.Move(0,1)      
            },
        ],
        [
            function(enemy){     
                new Nota(enemy.scene,6,2,0,-1).AddKeyword({allegro:null}) 
            },
        ],

    ]
    /*
    enemyActions:
    [
        [//Compas 1
            {
                notes:
                [
                    {
                        posY: 2,
                        tipoNota: 1
                    }
                ],
                move:
                {
                    y: 0
                }
            }
        ],
        [//Compas 2
            {
                notes:
                [
                ],
                move:
                {
                    y: 1
                }
            }
        ],
        [//Compas 3
            {
                notes:
                [
                    {
                        posY: 3,
                        tipoNota: 1
                    }
                ],
                move:
                {
                    y: -1
                }
            },
            {
                notes:
                [
                    {
                        posY: 2,
                        tipoNota: 1
                    }
                ],
                move:
                {
                    y: 2
                }
            },
            {
                notes:
                [
                    {
                        posY: 4,
                        tipoNota: 1
                    }
                ],
                move:
                {
                    y: 0
                }
            }
        ],
        [//Compas 4
            {
                notes:
                [
                ],
                move:
                {
                    y: 1
                }
            }
        ],
    ]
        */
};
export default testEnemy;