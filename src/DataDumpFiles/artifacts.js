import { AddToFunctionAfter ,AddToFunctionBefore } from "../Utils/addToFunction.js";
import NotasEffects from "../Effects/notasEffects.js"
import { notasPool } from "../Scenes/combatScene.js";
import Proyectil from "../Projectiles/baseprojectile.js";

/**@todo habrá que convertir en clase pa que tengan imagenes y desc*/

const artifactList = [
    {//Sordina
        effect: function(player){
            NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Muffler",
        description: " ",
    },
    {
        effect: function(player){
            player.Syncopate = AddToFunctionAfter(player.Syncopate, function(x,y){
                notasPool.Spawn("nota",x,y,1,0);
            });
            //NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});

        },
        nombre: "Clown_Shoes",
        description: `MIC MIC`,
    },
    {
        effect: function(player){
            NotasEffects.allegro = NotasEffects.presto;
        },
        nombre: "Trinity_Pop",
        description: `3333 BPM`,
    },

];
export default artifactList;