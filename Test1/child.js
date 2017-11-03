

process.on('message', function(c) {
    b=0;
    while (b<51) {
    process.send(b++); 
    }
    
process.exit();    
});

