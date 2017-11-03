# Clearing Wrong.

Just running this example repeatidly you will find differing numbers of 
messages actually received by the parent.

# Run Examples

```
C:\Users\Andrew\git\node-child-process-fork\Test1>node parent.js
Begin
End
Pause End
Got Message : 0
Got Message : 1
Got Message : 2
Child Exited
Got Message : 3

C:\Users\Andrew\git\node-child-process-fork\Test1>node parent.js
Begin
End
Pause End
Got Message : 0
Got Message : 1
Got Message : 2
Got Message : 3
Child Exited
Got Message : 4

C:\Users\Andrew\git\node-child-process-fork\Test1>node parent.js
Begin
End
Pause End
Got Message : 0
Got Message : 1
Got Message : 2
Got Message : 3
Got Message : 4
Child Exited
Got Message : 5

C:\Users\Andrew\git\node-child-process-fork\Test1>node parent.js
Begin
End
Pause End
Got Message : 0
Got Message : 1
Got Message : 2
Got Message : 3
Got Message : 4
Child Exited
Got Message : 5

C:\Users\Andrew\git\node-child-process-fork\Test1>node parent.js
Begin
End
Pause End
Got Message : 0
Got Message : 1
Got Message : 2
Child Exited
Got Message : 3

C:\Users\Andrew\git\node-child-process-fork\Test1>node parent.js
Begin
End
Pause End
Got Message : 0
Got Message : 1
Got Message : 2
Got Message : 3
Got Message : 4
Got Message : 5
Child Exited
Got Message : 6

C:\Users\Andrew\git\node-child-process-fork\Test1>
```