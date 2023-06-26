export default anims => {
    anims.create({
        key: 'hit-effect',
        frames: anims.generateFrameNumbers('hit-sheet', {start: 0, end: 4}),
        frameRate: 10,
        repeat: 0,
    });

    anims.create({
        key: 'sword-default-swing',
        frames: anims.generateFrameNumbers('sword-default', {start: 0, end: 2}),
        frameRate: 20,
        repeat: 0,
    });
};