var game = new Phaser.Game(width, height, Phaser.AUTO,'');

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
game.state.add('Play', Game.Play);
game.state.add('Over', Game.Over);

game.state.start('Boot');