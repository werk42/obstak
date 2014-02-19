Game = {};

var width = 400;
var height = 600;
var score = 0;

Game.Boot = function(game) {};

Game.Boot.prototype = {
  preload: function () {
    label = game.add.text(width / 2 , height / 2, 'Loading...', { font: '24px Lucida Console', fill: '#135560' });
    label.anchor.setTo(0.5, 0.5);
    
    game.load.image('splash', 'assets/splash.png');
    game.load.image('bg', 'assets/bg.png');
    game.load.image('player', 'assets/pl.png');
    game.load.image('ob1', 'assets/ob.png');
    game.load.image('ob2', 'assets/ob2.png');
  },

  create: function () {
    game.state.start('Load');
  }
};

Game.Load = function(game) {};

Game.Load.prototype = {
  preload: function () {
    splash = game.add.sprite(0, 0, 'splash');
  },

  update: function() {
    if (this.game.input.activePointer.isDown) 
      game.state.start('Play');
  },
};

Game.Over = function(game) {};

Game.Over.prototype = {
  create: function() {
    label = game.add.text(width / 2 , height / 2, 'G A M E  O V E R\n\nScore: '+score+'\n\nclick to restart',{ font: '22px Lucida Console', fill: '#135560', align: 'center'});
    label.anchor.setTo(0.5, 0.5);
  },

  update: function() {
    score = 0;
    if (this.game.input.activePointer.isDown)
      game.state.start('Play');
  }
};