        var game = new Phaser.Game(800,600, Phaser.AUTO);
        game.state.add('state0', st0);
        game.state.add('state1', st1);
        game.state.start('state0')
