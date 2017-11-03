console.log('Begin');
var child = require('child_process').fork('./child.js');

child.send('This makes the client send 50 messages');
a=0;

child.on('message', 
   function (c) {
       console.log("Got Message : " + JSON.stringify(c));
   });


child.on('close', function () { console.log("Closed"); });
child.on('exit', function () { console.log("Exited"); });

console.log('End');
  

