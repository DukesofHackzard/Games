var menuState = {
    
    create: function() {
        
        game.stage.backgroundColor = '#7E5109';

  	    // Set the physics system
  	    game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var nameLabel = game.add.text(20, 80, 'Dukes of Hackzard!', {font: '40px Arial', fill: '#ffffff'});
        
        var startLabel = game.add.text(10, game.world.height-80, 'Press the \'Spacebar\' key to begin', {font: '25px Arial', fill: '#ffffff'});
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function() {
        game.state.start('main');
    }
    
    
}