import Phaser from 'phaser';

// types
import { ENEMY_TYPES } from '../types';

// mixin
import collidable from '../mixins/collidable';

class Enemies extends Phaser.GameObjects.Group {
    constructor(scene) {
        super(scene);

        Object.assign(this, collidable);
    }

    getTypes() {
        return ENEMY_TYPES;
    }
}

export default Enemies;
