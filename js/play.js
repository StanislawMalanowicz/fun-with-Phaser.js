
 var playState = {

     preload: function(){
        game.load.image('asset', 'assets/asset.png')
        game.load.image('ball', 'assets/basketball.png')
    },

    create: function(){
        player = game.add.sprite(100, 100, 'asset')
        game.physics.enable(player, Phaser.Physics.ARCADE)
        player.body.bounce.setTo(1,1);
        player.body.collideWorldBounds = true;

        enemy = game.add.sprite(400, 300, 'ball')
        game.physics.enable(enemy, Phaser.Physics.ARCADE)
        enemy.body.bounce.setTo(1,1);
        enemy.body.collideWorldBounds = true;


        cursors = game.input.keyboard.createCursorKeys();

    },

    update: function(){
        game.physics.arcade.collide(player, enemy)

        if(cursors.left.isDown){
            player.body.velocity.x -=10;
        }
        if(cursors.right.isDown){
            player.body.velocity.x +=10;
            console.log(player.x)
        }
        if(cursors.down.isDown){
            player.body.velocity.y +=10;
        }
        if(cursors.up.isDown){
            player.body.velocity.y -=10;
        }
        // if(player.x > 230){
       
        //     console.log('jeb')
       
        //     game.state.start('win'); 
	    // }
    }
 }
      
      