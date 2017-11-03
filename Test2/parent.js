console.log('Begin');

var child = require('child_process').fork('./child.js');

child.send('This makes the client send 50 messages');


child.on('message', 
                    function (c) {

                        console.log("Got Message : " + JSON.stringify(c));
                        
                    }
        );


child.on('close', function () { console.log("Child Closed"); });
child.on('exit',  function () { console.log("Child Exited"); });

console.log('End');
  
/* Simulate a little wait as the program does something else */ 
setTimeout(function() {
    console.log('Pause End');
}, 100);
