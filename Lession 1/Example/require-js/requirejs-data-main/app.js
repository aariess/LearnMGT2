requirejs.config({
  "paths": {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        'cycle': 'http://malsup.github.io/min/jquery.cycle2.min'
    },
    "shim": {
        'cycle': {
            deps: ['jquery']
        }
    }
});
require(['cycle'],function(util) {
    // Manually initialize cycle
    $('.slideshow').cycle();
    // Setup a call to the Cycle API
    $('.reinit').click(function() {
        $('.slideshow').cycle('reinit');
        console.log('slideshow should have reinitialized');
    });

    $('.prev').click(function() {
        $('.slideshow').cycle('prev');
        console.log('prev() should have fired');
    });
});
