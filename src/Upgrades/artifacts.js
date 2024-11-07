import { AddToFunctionAfter,AddToFunctionBefore } from "../Utils/addToFunction.js";
import NotasEffects from "../Effects/notasEffects.js"

/**@todo habrá que convertir en clase pa que tengan imagenes y desc*/

const artifactList = [
    {//Sordina
        effect: function(){
            NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Muffler",
        description: "The subtle difference",
    },
    {
        effect: function(){
            //NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Mitosic_Pick",
        description: `What doesnt kill you
begins celular processes`,
    },
    {
        effect: function(){
            //NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        nombre: "Trinity_Pop",
        description: `Three Chords are
more than enough`,
    }

];
export default artifactList;