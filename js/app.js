 var game = new Phaser.Game(640, 480, Phaser.Auto, '', {preload: preload, create: create, update: update});
 var player;
        function preload(){
            game.load.image('goat', 'assets/goat.png')
        }
        function create(){
            player = game.add.sprite(100, 100, 'goat')
        }
        function update(){

        }