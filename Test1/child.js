process.on('message', function(c) {
    b=0;
    while (b<51) {
    process.send(b);
    console.log('Sent : ' + b);
    b++;
    }
    process.exit();
 });
