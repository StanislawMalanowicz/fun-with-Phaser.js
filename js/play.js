
 var playState = {

     preload: function(){
        game.load.image('asset', 'assets/asset.png')
        game.load.image('ball', 'assets/basketball.png')
        game.load.image('glass', 'assets/glass.png')
        game.load.audio('kick', 'assets/kick.mp3')
        game.load.audio('crush', 'assets/glassCrush.mp3')
    },

    create: function(){
        colideCounter = 0;

        player = game.add.sprite(100, 100, 'asset')
        game.physics.enable(player, Phaser.Physics.ARCADE)
        player.body.bounce.setTo(1,1);
        player.body.collideWorldBounds = true;

        enemy = game.add.sprite(400, 300, 'ball')
        game.physics.enable(enemy, Phaser.Physics.ARCADE)
        enemy.body.bounce.setTo(1,1);
        enemy.body.collideWorldBounds = true;

        glass = game.add.group();
        glass.enableBody = true;
        game.physics.arcade.enable(glass)
        glass.create(200, 100, 'glass')
        glass.create(300, 100, 'glass')
        glass.create(400, 100, 'glass')
        glass.forEachAlive(function(item){
            item.body.bounce.y = 1;
            item.body.bounce.x = 1;
            item.body.collideWorldBounds = true;
        })

        cursors = game.input.keyboard.createCursorKeys();

        emitter = game.add.emitter(0,0,100);
        emitter.makeParticles('glass');
        emitter.gravity = 200;

    },
    // shouldCollide: function(){
    //     return player.body.velocity.x > 150 || player.body.velocity.y >150;
    // },
    // collideCallback: function(o1, o2){
    //     game.sound.play('kick')
    //     // colideCounter ++;
    //     // console.log(colideCounter)
    // },
    
    playerCollideCallback: function(o1, o2){
        game.sound.play('kick')
        // colideCounter ++;
        // console.log(colideCounter)
    },
    targetCollideCallback: function(o1, o2){
        game.sound.play('crush')
        emitter.x = o2.x;
        emitter.y = o2.y;
        emitter.start(true, 200, null, 20);
        o2.kill()
        // colideCounter ++;
        // console.log(colideCounter)
    },
    update: function(){
        game.physics.arcade.collide(player, enemy, this.playerCollideCallback, this.shouldCollide)
        game.physics.arcade.collide(player, glass, this.playerCollideCallback, this.shouldCollide)
        game.physics.arcade.collide(enemy, glass, this.targetCollideCallback, this.shouldCollide)
        game.physics.arcade.collide(glass, glass,)
    

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
        // if(colideCounter >5){
        //     game.state.start('win')
        // }
        // if(player.x > 230){
       
        //     console.log('jeb')
       
        //     game.state.start('win'); 
        // }
        if(glass.countLiving() == 0){
            game.state.start("win")
        }
    }
 }
      
      