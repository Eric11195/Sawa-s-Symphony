export default class ProjectilePool extends Phaser.GameObjects.Group
{
    constructor(scene, config = {})
	{
		const defaults = {
			classType: Phaser.GameObjects.Image,
			maxSize: -1
		}

		super(scene, Object.assign(defaults, config))
	}

    //Spawn new note
    spawn(newNoteConfig){
        this.get(newNoteConfig);
    }

    //Despawns given note
    despawn(note){
        this.killAndHide(note);
        
    }

}

Phaser.GameObjects.GameObjectFactory.register
('projectilePool', function () 
    {
        return this.updateList.add(new ProjectilePool(this.scene));
    }
)