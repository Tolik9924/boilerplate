import Phaser from 'phaser';

// effects
import EffectManager from '../effects/EffectManager';

class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.speed = 300;
        this.maxDistance = 300;
        this.traveledDistance = 0;

        this.damage = 10;
        this.cooldown = 500;

        this.body.setSize(this.width - 13, this.height - 20);

        this.effectManager = new EffectManager(this.scene);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        this.traveledDistance += this.body.deltaAbsX();

        if (this.isOutRange()) {
            this.body.reset(0, 0);
            this.activeProjectile(false);
            this.traveledDistance = 0;
        }
    }

    fire(x, y, anim) {
        this.activeProjectile(true);
        this.body.reset(x, y);
        this.setVelocityX(this.speed);

        anim && this.play(anim, true);
    }

    deliversHit(target) {
        this.activeProjectile(false);
        this.traveledDistance = 0;
        const impactPosition = { x: this.x, y: this.y };
        this.body.reset(0,0);
        this.effectManager.playEffectOn('hit-effect', target, impactPosition);
    }

    activeProjectile(isActive) {
        this.setActive(isActive);
        this.setVisible(isActive);
    }

    isOutRange() {
        return this.traveledDistance && 
               this.traveledDistance >= this.maxDistance; 
    }
}

export default Projectile;
