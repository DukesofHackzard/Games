var overState = {
    
    create: function() {
        
        game.stage.backgroundColor = '#7E5109';

  	    // Set the physics system
  	    game.physics.startSystem(Phaser.Physics.ARCADE);
        var score = localStorage.getItem("score");
        var nameLabel = game.add.text(20, 80, 'You suck! Score: ' + score , {font: '40px Arial', fill: '#ffffff'});
        var startLabel = game.add.text(10, game.world.height-80, 'Press the \'Spacebar\' key to return', {font: '25px Arial', fill: '#ffffff'});
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        $.ajax({
            url:"insert.php",
            data:{"score1":score},
            type:"POST",
            cache: false
        });
        setTimeout(function() {
            document.location = "http://cs4830.myjy6vd.tech";
           }, 300);
    },

    start: function() {
        localStorage.setItem("score",JSON.stringify(0));
        game.state.start('menu');
    }
}