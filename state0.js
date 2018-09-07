        var st0 = {
            preload: p0,
            create: c0,
            update: u0
        }

        function p0() {
            game.load.image('sky', 'assets/sky.png');
            game.load.image('ground', 'assets/platform.png');
            game.load.image('star', 'assets/star.png');
            game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        }

        function c0() {
            game.stage.backgroundColor = '#ffccdd'

            game.add.sprite(0, 0, 'star');


        }

        function u0() {}
