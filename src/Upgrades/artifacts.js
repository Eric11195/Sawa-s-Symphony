import { AddToFunctionAfter,AddToFunctionBefore } from "../Utils/addToFunction.js";

/**@todo habrá que convertir en clase pa que tengan imagenes y desc*/

const artifactList = [
    {//Sordina
        effect: function(){
            NotasEffects.silent = AddToFunctionBefore(NotasEffects.silent, function(nota){nota.AddKeyword({upgrade:null})});
        },
        img: "ruta",
    }

];
export default artifactList;