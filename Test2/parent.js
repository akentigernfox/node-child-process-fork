console.log('Begin');
var child = require('child_process').fork('./child.js');

child.send('This makes the client send 50 messages');
a=0;

setTimeout(function() {
     child.on('message', 
     
        function (c) {
            console.log("got message" + JSON.stringify(c));
            if (c=="LastMessageExitNow") child.send('exit');
            if (c='50') {a=1;}
        });}
,10);

child.on('close', function () { console.log("Closed"); });
child.on('exit', function () { console.log("Exited"); });

console.log('End');
  

