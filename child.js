process.on('message', function(c) {
    if (c=="exit") {
        process.exit();
    }

    b=0;
    while (b<51) {
    process.send(b++);
    }
    process.send('LastMessageExitNow');
    

});
