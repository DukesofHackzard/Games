// Create our 'main' state that will contain the game
localStorage.setItem("score",JSON.stringify(0));
var mainState = {
//	preload: function() { 
//  	  // Load the genlee sprite
//  	  game.load.image('genlee', 'assets/genlee.png'); 
//      game.load.image('cop', 'assets/cop.png');
//	},

	create: function() { 
 	   // Change the background color of the game to blue
  	  game.stage.backgroundColor = '#7E5109';

  	  // Set the physics system
//  	  game.physics.startSystem(Phaser.Physics.ARCADE);

  	  // Display the genlee at the position x=100 and y=245
  	  this.genlee = game.add.sprite(100, 245, 'genlee');

  	  // Add physics to the genlee
  	  // Needed for: movements, gravity, collisions, etc.
  	  game.physics.arcade.enable(this.genlee);
	
  	  // Add gravity to the genlee to make it fall
  	  this.genlee.body.gravity.y = 1000;  
        
        this.cops = game.add.group(); 

  	  // Call the 'jump' function when the spacekey is hit
  	  var spaceKey = game.input.keyboard.addKey(
      	              Phaser.Keyboard.SPACEBAR);
  	  spaceKey.onDown.add(this.jump, this);   
        
        this.timer = game.time.events.loop(1500, this.addRowOfcops, this);
        
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "0", 
            { font: "30px Arial", fill: "#ffffff" });
        
        // Move the anchor to the left and downward
        this.genlee.anchor.setTo(-0.2, 0.5); 
	},

	update: function() {
 	   // If the genlee is out of the screen (too high or too low)
 	   // Call the 'restartGame' function
 	   if (this.genlee.y < 0 || this.genlee.y > 490)
// 	       this.restartGame();
//           this.goToMenu();
           this.gameOver();
        
        game.physics.arcade.overlap(
        this.genlee, this.cops, this.hitcop, null, this);
        
        if (this.genlee.angle < 20){
            this.genlee.angle += 1; 
        }
	},
	
	jump: function() {
        
        if (this.genlee.alive == false) return; 
        
    	// Add a vertical velocity to the genlee
  	  this.genlee.body.velocity.y = -350;
        
        game.add.tween(this.genlee).to({angle: -20}, 100).start(); 
	},

	// Restart the game
	restartGame: function() {
	    // Start the 'main' state, which restarts the game
	    game.state.start('main');
	},
    
    goToMenu: function() {
        game.state.start('menu');
    },
    
    gameOver: function() {
        game.state.start('over');
    },
    
    addOnecop: function(x, y) {
        // Create a cop at the position x and y
        var cop = game.add.sprite(x, y, 'cop');

        // Add the cop to our previously created group
        this.cops.add(cop);

        // Enable physics on the cop 
        game.physics.arcade.enable(cop);

        // Add velocity to the cop to make it move left
        cop.body.velocity.x = -200; 

        // Automatically kill the cop when it's no longer visible 
        cop.checkWorldBounds = true;
        cop.outOfBoundsKill = true;
    },
    
    addRowOfcops: function() {
        // Randomly pick a number between 1 and 5
        // This will be the hole position
        var hole = Math.floor(Math.random() * 5) + 1;

        // Add the 6 cops 
        // With one big hole at position 'hole' and 'hole + 1'
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1) 
                this.addOnecop(400, i * 60 + 10);
        
        this.score += 1;
        this.labelScore.text = this.score;
        localStorage.setItem("score",JSON.stringify(this.score));
    },
    
    hitcop: function() {
        // If the genlee has already hit a cop, do nothing
        // It means the genlee is already falling off the screen
        if (this.genlee.alive == false)
            return;

        // Set the alive property of the genlee to false
        this.genlee.alive = false;

        // Prevent new cops from appearing
        game.time.events.remove(this.timer);

        // Go through all the cops, and stop their movement
        this.cops.forEach(function(p){
            p.body.velocity.x = 0;
        }, this);
    },
};
// Initialize Phaser, and create a 400px by 490px game
//var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game');

// Add the 'mainState' and call it 'main'
//game.state.add('main', mainState); 

// Start the state to actually start the game
//game.state.start('main');

