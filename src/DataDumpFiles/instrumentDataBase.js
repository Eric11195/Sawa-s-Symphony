import { clockInstance, notasPool} from "../Scenes/combatScene.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const InstrumentDataBase = [
{
    nombre: "Recorder",
    description: 
`Baby's First Woodwind`,
    baseCooldown: 2,
    numeroNotas: 1,
    tipoNotas: 0,
    noteKeywords: {earworm:2,forte:null,allegro:null, accompaniment:{silent:2}},
    instrumentKeywords: {move:{x:0,y:-1}, vibrato:{x:0,y:0}, ancla: 2}
},
{
    nombre: "Piano",
    description: 
`You know what to do.`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    notePositionMod: [/*{x:0,y:1},*/{x:0,y:0}/*,{x:0,y:-1}*/],
    instrumentKeywords: {sostenuto:{pos:{x:0,y:0}, tipoNota: 0}}
}, 
{
    nombre: "Bell",//cascabel
    description: 
`Catch me if you can!`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    //instrumentKeywords: {sostenuto:{pos:{x:0,y:0}, tipoNota: 1}}
},
{
    nombre: "Electric_Guitar",
    description: 
`Watch and learn!`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
    nombre: "Trumpet",
    description: 
`doot`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
    nombre: "Ukelele", //ROR reference
    description: 
`...and his music
was electric.`,
    numeroNotas: 1,
    tipoNotas: 0,
    baseCooldown: 4,
    noteKeywords: {presto:null,clash:{self:{moveYRandom:null},other:{adagio:1}},accompaniment:{self:{moveYRandom:null},other:{allegro:null}}}
    //instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
    nombre: "Golden_Lute",
    description: 
`Melody's Favourite.`, //Crypt of the necrodancer reference
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {syncopate:
        function(xPos,yPos){
            if(yPos < 4)
                notasPool.Spawn("nota",xPos,yPos+1,1,0).AddKeyword(this.noteKeywords);
            if(yPos>0)
                notasPool.Spawn("nota",xPos,yPos-1,1,0).AddKeyword(this.noteKeywords);
        }
    }
},/*
{
    nombre: "Otter_Orchestra",
    description: 
`Too many instruments
for one otter`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},*/
{
    //Aumenta las acumulaciones de todas las keywords acumulables que ya existiesen
    nombre: "Psaltery", //brutal Orchestra enemy
    description: 
`Brutal.`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
        nombre: "Grace", //One step from eden Violette's main 
        description: 
`She'll compose her own songs,
and dance to them too.`,
        numeroNotas: 1,
        tipoNotas: 1,
        baseCooldown: 4,
        instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
}
];

export default InstrumentDataBase;