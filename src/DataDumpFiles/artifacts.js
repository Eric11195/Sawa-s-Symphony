import { AddToFunctionAfter,AddToFunctionBefore } from "../Utils/addToFunction.js";
import NotasEffects from "../Effects/notasEffects.js"

/**@todo habrá que convertir en clase pa que tengan imagenes y desc*/

const artifactList = [
    {//Sordina
        effect: function(){
            NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Muffler",
        description: " ",
    },
    {
        effect: function(){
            //NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Mitotic_Pick",
        description: `What doesn't kill you
begins cellular processes.`,
    },
    {
        effect: function(){
            //NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Trinity_Pop",
        description: `3333 BPM`,
    }

];
export default artifactList;