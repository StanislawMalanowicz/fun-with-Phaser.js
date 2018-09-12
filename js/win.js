var winState = {
    create: function(){
        game.add.text(100, 100, 'You won! Press space to restart', {fill: '#ff3333'});

        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
       
        this.spaceKey.onDown.add(this.restartGame, this);
    },
    restartGame: function(){
        game.state.start('menu');
    }
}


