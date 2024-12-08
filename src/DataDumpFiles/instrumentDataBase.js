import { clockInstance, notasPool} from "../Scenes/combatScene.js";
import BoardUnit from "../BoardUnits/boardUnit.js";

/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const InstrumentDataBase = [
{//0
    nombre: "Recorder",
    description: 
`Baby's First Woodwind`,
    baseCooldown: 2,
    numeroNotas: 1,
    tipoNotas: 0,
    noteKeywords: {silent:2,earworm:2,forte:null,allegro:null, accompaniment:{other:{silent:2}}},
    instrumentKeywords: {move:{x:0,y:-1}, vibrato:{x:0,y:0}, ancla: 2}
},
{//1
    nombre: "Piano",
    description: 
`You know what to do.`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    notePositionMod: [/*{x:0,y:1},*/{x:0,y:0}/*,{x:0,y:-1}*/],
    instrumentKeywords: {sostenuto:{pos:{x:0,y:0}, tipoNota: 0}}
}, 
{//2
    nombre: "Bell",//cascabel
    description: 
`Catch me if you can!`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    //instrumentKeywords: {sostenuto:{pos:{x:0,y:0}, tipoNota: 1}}
},
{//3
    nombre: "Electric_Guitar",
    description: 
`Watch and learn!`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:[{x:0,y:1}, {x:0,y:-1}]}
},
{//4
    nombre: "Trumpet",
    description: 
`doot`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{//5
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
{//6
    nombre: "Golden_Lute",
    description: 
`Melody's Favourite.`, //Crypt of the necrodancer reference
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {syncopate:
        function(instrument){return function(xPos,yPos){
            if(yPos < 4)
                notasPool.Spawn("nota",xPos,yPos+1,1,0).AddKeyword(instrument.noteKeywords);
            if(yPos>0)
                notasPool.Spawn("nota",xPos,yPos-1,1,0).AddKeyword(instrument.noteKeywords);
        }}
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
{//7
    //Aumenta las acumulaciones de todas las keywords acumulables que ya existiesen
    nombre: "Psaltery", //brutal Orchestra enemy
    description: 
`Brutal.`,
    numeroNotas: 0,
    tipoNotas: 1,
    baseCooldown: 4,
    ThrowNotes: function()
    {
        this.PsalteryIndex = this.PsalteryIndex ?? -1;
        this.PsalteryIndex *= -1;
        this.SpawnNotes(this.sceneRef.player.position.x, this.sceneRef.player.position.y+this.PsalteryIndex, this.tipoNotas);
    }
    ,
    instrumentKeywords: {solo:function(instrument){
        instrument.ProducirNotas();
    }}
},
{//8
        nombre: "Grace", //One step from eden Violette's main 
        description: 
`She'll compose her own songs,
and dance to them too.`,
        numeroNotas: 0,
        tipoNotas: 1,
        baseCooldown: 8,
        instrumentKeywords: 
            {tempo:function(instrument){return function(xPos,yPos){
                let myTileMarkers =[];
                let myInitPosX = instrument.sceneRef.player.position.x;
                let myInitPosY = instrument.sceneRef.player.position.y;
                myTileMarkers.push(new BoardUnit(instrument.sceneRef, {x:myInitPosX,y:myInitPosY}, "earworm"));
                myTileMarkers.push(new BoardUnit(instrument.sceneRef, {x:myInitPosX+1,y:myInitPosY}, "sword"));
                myTileMarkers.push(new BoardUnit(instrument.sceneRef, {x:myInitPosX-1,y:myInitPosY}, "shield"));
                myTileMarkers.push(new BoardUnit(instrument.sceneRef, {x:myInitPosX,y:myInitPosY-1}, "bell"));
                myTileMarkers.push(new BoardUnit(instrument.sceneRef, {x:myInitPosX,y:myInitPosY+1}, "clock"));

                instrument.sceneRef.time.addEvent({delay: clockInstance.delayTimer*1.5, callback: ()=>{
                    let myRelativePosX = instrument.sceneRef.player.position.x;
                    let myRelativePosY = instrument.sceneRef.player.position.y;
                    myRelativePosX -= myInitPosX;
                    myRelativePosY -= myInitPosY;
                    for(let i = 0; i < myTileMarkers.length; i++){
                        myTileMarkers[i].destroy();
                    }
                        if(myRelativePosX==0 && myRelativePosY == 0)
                            instrument.sceneRef.player.earworm = 1;
                        else if(myRelativePosX==-1 && myRelativePosY == 0){
                            notasPool.Spawn("nota",instrument.sceneRef.player.position.x,instrument.sceneRef.player.position.y,1,0).AddKeyword({adagio: null, forte:null});
                            if(instrument.sceneRef.player.position.y < 4)
                                notasPool.Spawn("nota",instrument.sceneRef.player.position.x,instrument.sceneRef.player.position.y+1,1,0).AddKeyword({adagio:null,forte:null});
                            if(instrument.sceneRef.player.position.y > 0)
                                notasPool.Spawn("nota",instrument.sceneRef.player.position.x,instrument.sceneRef.player.position.y-1,1,0).AddKeyword({adagio:null, forte:null});
                        
                        }else if(myRelativePosX==0 && myRelativePosY == -1)
                            console.log(0,-1);
                            //spawnCascabel
                        else if(myRelativePosX==0 && myRelativePosY == 1){
                            for(let i = 0; i < 3; i++){
                                if(instrument.sceneRef.player.instrumentos[i]){
                                    instrument.sceneRef.player.instrumentos[i].ReduceCooldown(1);
                                }
                            }
                        }else if(myRelativePosX==1 && myRelativePosY == 0)
                            notasPool.Spawn("nota",instrument.sceneRef.player.position.x,instrument.sceneRef.player.position.y,1,1).AddKeyword({earworm:3,presto:null});
                }});
        }}}
},
{//9
    nombre: "Tuba", //Skullgirls reference
    description: 
`tuba tuba tuba tuba tuba`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 5,
    //noteKeywords: {presto:null,clash:{self:{moveYRandom:null},other:{adagio:1}},accompaniment:{self:{moveYRandom:null},other:{allegro:null}}}
    instrumentKeywords: {move:{x:-1,y:0},sostenuto:{pos:{x:0,y:0},tipoNota:1}}
},
{//10
    nombre:"Kazoo",
    description: `Who *are* you?`,
    numeroNotas: 2,
    tipoNotas: 0,
    baseCooldown:5,
    instrumentKeywords: {move:{x:0,y:1},tempo:function(instrument){return function(xPos,yPos){
        notasPool.Spawn("nota",xPos,yPos,1,0);
        instrument.sceneRef.time.addEvent({delay: clockInstance.delayTimer*0.5, callback: ()=>{
            notasPool.Spawn("nota",xPos,yPos,1,0);
        }});
    }}}
},
{//11
    nombre:"Microphone",
    description: `Catchy Chorus`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown:10,
    noteKeywords: {earworm:1},
    instrumentKeywords: {solo:function(instrument){
        let randomInt = Math.floor(3*Math.random());
        //notasPool.Spawn("nota",instrument.sceneRef.player.position.x,Math.floor(5*Math.random()),1,Math.floor(Math.random()*3));
        for(let i = 0; i < randomInt+1; i++){
            instrument.sceneRef.time.addEvent({delay: i*clockInstance.delayTimer/randomInt, callback: ()=>{
                notasPool.Spawn("nota",instrument.sceneRef.player.position.x,Math.floor(5*Math.random()),1,0).AddKeyword({earworm:1});
            }});
        }
    }}
},
{//12
    nombre:"Gong",
    description: `Gonggggggggggg`,
    numeroNotas: 1,
    numeroNotas:1,
    tipoNotas: 2,
    ThrowNotes: function(){
        for(let i = 0; i < this.notePositionMod.length; i++){
        this.SpawnNotes(this.sceneRef.player.position.x+this.notePositionMod[i].x, 0, this.tipoNotas);
        this.SpawnNotes(this.sceneRef.player.position.x+this.notePositionMod[i].x, 1, this.tipoNotas);
        this.SpawnNotes(this.sceneRef.player.position.x+this.notePositionMod[i].x, 2, this.tipoNotas);
        this.SpawnNotes(this.sceneRef.player.position.x+this.notePositionMod[i].x, 3, this.tipoNotas);
        this.SpawnNotes(this.sceneRef.player.position.x+this.notePositionMod[i].x, 4, this.tipoNotas);
        }
    },
    baseCooldown:8,
    noteKeywords: {adagio:null},
},
{//13
    nombre:"Snare_Drum",
    description: `Hut Two Three Four`,
    numeroNotas: 1,
    tipoNotas: 0,
    numeroNotas:2,
    baseCooldown:2,
    instrumentKeywords: {syncopate:function(instrument){return function(xPos,yPos){
        for(let i = 0; i < 3; i++){
            if(instrument.sceneRef.player.instrumentos[i]){
                instrument.sceneRef.player.instrumentos[i].ReduceCooldown(1);
            }
        }
    }}}

},
{//14
    nombre:"Drum_Kit",
    description: `Nothin' But A Funky Beat`,
    numeroNotas: 1,
    tipoNotas: 0,
    counter: 0,
    baseCooldown: 4,
    ThrowNotes:function(){
        if (this.counter < 3){
            this.SpawnNotes(this.sceneRef.player.position.x,this.sceneRef.player.position.y,this.counter);
            this.counter++;
        }
        else{
            this.counter = this.tipoNotas;
            
            for (let i= 0; i<3;i++){
                this.sceneRef.time.addEvent({delay: clockInstance.delayTimer*0.33*i, callback: ()=>{
                    this.SpawnNotes(this.sceneRef.player.position.x,this.sceneRef.player.position.y-1,2);
                    this.SpawnNotes(this.sceneRef.player.position.x,this.sceneRef.player.position.y,2);
                    this.SpawnNotes(this.sceneRef.player.position.x,this.sceneRef.player.position.y+1,2);
                }});
            }
        }
    }
},
{//15
    nombre:"Amp",
    description: `LOUDER!`,
    baseCooldown: 10,
    tipoNotas: 0,
    delay: 3,
    instrumentKeywords: {sostenuto:{pos:{x:0,y:0}}},
    ThrowNotes:function(){
        this.SpawnNotes(this.sceneRef.player.position.x,this.sceneRef.player.position.y,this.tipoNotas);
        for(let i = 0; i < 3; i++) if(this.sceneRef.player.instrumentos[i]) this.sceneRef.player.instrumentos[i].tipoNotas++;
        this.sceneRef.time.addEvent({delay: clockInstance.delayTimer*4, callback: ()=>{
            for(let i = 0; i < 3; i++) if(this.sceneRef.player.instrumentos[i]) this.sceneRef.player.instrumentos[i].tipoNotas--;
        }});
    }
}
/*{//XX
    nombre:"Bajo",
    description: `Absence Makes The Heart Grow Fonder`,
    baseCooldown: 8,
    tipoNotas: 0,
    ThrowNotes:function(){

    }
}*/
];

export default InstrumentDataBase;