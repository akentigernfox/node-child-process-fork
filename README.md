# node-child-process-fork
node.js   child_process fork messaging.

The problem with an exiting client process that is sending messages
to the parent for further processing.

To see the problems in each ecample,  just run :

 node parent.js  

#Test1

Highlights how bad it really could be.

#Test2

Highlights how adding a console.log to the script masks the situtation

#Soltion

Add a simple message handshake between parent & client before closing