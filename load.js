var loadState = {
    
    preload: function() {
        
        var label = game.add.text(80, 150, 'loading...', {font: '50px Courier', fill: '#ffffff'});
        
        game.load.image('genlee', 'genlee.png');
        game.load.image('cop', 'cop.png');
        
    },
    
    create: function() {
        game.state.start('menu');
    }
}