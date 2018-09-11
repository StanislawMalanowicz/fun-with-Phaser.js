var winState = {
    create: function(){
        game.add.text(100, 100, 'You won! Press space to restart', {fill: '#fff'});

        this.spaceKey = game.input.keyboard.addKey(Phaser.keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.restartGame, this);
    },
    restartGame: function(){
        game.state.start('menu');
    }
}