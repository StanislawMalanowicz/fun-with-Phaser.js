var menuState = {
    create: function(){
        game.add.text(100, 100, 'Menu - click space to start', {fill: '#ff3333'})
        
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.startGame, this)
    },

    startGame: function(){
        game.state.start('play');
    }
}