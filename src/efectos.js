import Instruments from './instruments';
import Notas from './notas';

class Efectos extends Instruments {
    constructor() {
        super();
        this.effectsList = []; // Additional property
    }

    // Example method
    applyEffect(effectName) {
        console.log(`Applying effect: ${effectName}`);
        this.effectsList.push(effectName); // Add effect to the list
    }

    // Additional method
    listEffects() {
        console.log('Current effects:', this.effectsList.join(', '));
    }

    // Creates a projectile that moves forward along the x-axis
    Vibrato() {
        const projectile = new Notas();
        projectile.velocity = { x: 1, y: 0 }; // Travels forward along the x-axis
    
        projectile.updatePosition = function(deltaTime) {
            this.position.x += this.velocity.x * deltaTime;
            this.position.y += this.velocity.y * deltaTime;
        };
    
        return projectile;
    }

    // Creates a note generator that sustains a note for a given duration
    Sostenuto(duration) {
        const noteGenerator = new Notas();
        noteGenerator.duration = duration;
        noteGenerator.elapsedTime = 0;
    
        noteGenerator.update = function(deltaTime) {
            this.elapsedTime += deltaTime;
            if (this.elapsedTime >= this.duration) {
                this.active = false; // Mark the generator as inactive
            }
        };
    
        return noteGenerator;
    }

    movePlayerXY(player, x, y) {
        player.Move(x, y);
        //Instrumento.SceneRef.player.Move(x, y);
    }
}

export default Efectos;
