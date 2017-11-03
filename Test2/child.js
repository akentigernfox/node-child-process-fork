

process.on('message', function(c) {
    b=0;
    while (b<51) {
    process.send(b++);
    /*
    Adding console.log causes almost a  synchronisation between send & receives
    */
    console.log('Sending ' + b);
    }
    
process.exit();    
});

