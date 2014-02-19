Game.Play = function(game) {};

Game.Play.prototype = {

  create: function() {
    // create scrolling background
    this.bg = game.add.tileSprite(0, 100, game.world.width, game.world.height, 'bg');

    // create player
    this.player = game.add.sprite(70, 100, 'player');
    this.player.body.setCircle(20);
    this.player.body.gravity.y = 700;
    this.player.body.bounce = 0.5;
    this.player.body.collideWorldBounds = true;

    // create top obstacles
    this.obTop = game.add.group();
    this.obt = this.obTop.create(this.game.world.width + Math.random() * 500, 0, 'ob1');
    this.obt.events.onOutOfBounds.add(this.resetTop, this);
    this.obt.body.velocity.x = -400;

    // create bottom obstacles
    this.obBot = game.add.group();
    this.obb = this.obBot.create(this.game.world.width + Math.random() * 500, game.world.height, 'ob2');
    this.obb.anchor.setTo(1,1, this);
    this.obb.events.onOutOfBounds.add(this.resetBot, this);
    this.obb.body.velocity.x = -400;

    // create score
    this.scoreText = this.game.add.text(10, 10, '', {font: "20px Lucida Console", fill: "#135560", align: "left"});

  },

  update: function() {
    this.bg.tilePosition.x += 0.1;

    this.game.physics.collide(this.player, this.obBot, this.collisonHandler, null, this);
    this.game.physics.collide(this.player, this.obTop, this.collisonHandler, null, this);

    if (this.game.input.activePointer.isDown) {
      this.player.body.velocity.y = -200;
    }
  },

  collisonHandler: function() {
    this.player.kill();
    game.state.start('Over');
  },

  resetTop: function() {
    this.obt.reset(this.game.world.width + Math.random() * 200, 0, 'ob1');
    this.obt.body.velocity.x = -400;
    this.gameScore(1);
  },

  resetBot: function() {
    this.obb.reset(this.game.world.width + Math.random() * 200, game.world.height, 'ob2');
    this.obb.body.velocity.x = -400;
    this.gameScore(1);
  },

  gameScore: function(n) {
    score += n;
    this.scoreText.content = score;
  },
};