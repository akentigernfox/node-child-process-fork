# Although this looks perfect, it's not.

The Sending messages are not synchronized exactly, so the console.log in the client
gives it the appearance of solving the problem but it is really masking the actual 
problem.

# Example Run Output


C:\Users\Andrew\git\node-child-process-fork\Test2>node parent.js
Begin
End
Pause End
Got Message : 0
Sending 1
Sending 2
Got Message : 1
Sending 3
Got Message : 2
Sending 4
Got Message : 3
Sending 5
Got Message : 4
Sending 6
Got Message : 5
Sending 7
Got Message : 6
Sending 8
Got Message : 7
Sending 9
Got Message : 8
Sending 10
Got Message : 9
Sending 11
Got Message : 10
Sending 12
Got Message : 11
Sending 13
Got Message : 12
Sending 14
Got Message : 13
Sending 15
Got Message : 14
Sending 16
Got Message : 15
Sending 17
Sending 18
Got Message : 16
Sending 19
Got Message : 17
Sending 20
Got Message : 18
Sending 21
Got Message : 19
Sending 22
Got Message : 20
Sending 23
Got Message : 21
Sending 24
Got Message : 22
Sending 25
Got Message : 23
Sending 26
Got Message : 24
Sending 27
Got Message : 25
Sending 28
Got Message : 26
Sending 29
Got Message : 27
Sending 30
Got Message : 28
Sending 31
Got Message : 29
Got Message : 30
Sending 32
Got Message : 31
Sending 33
Got Message : 32
Sending 34
Got Message : 33
Sending 35
Got Message : 34
Sending 36
Got Message : 35
Sending 37
Got Message : 36
Sending 38
Got Message : 37
Sending 39
Got Message : 38
Sending 40
Got Message : 39
Sending 41
Got Message : 40
Sending 42
Got Message : 41
Sending 43
Got Message : 42
Sending 44
Got Message : 43
Sending 45
Got Message : 44
Sending 46
Got Message : 45
Sending 47
Got Message : 46
Sending 48
Got Message : 47
Sending 49
Got Message : 48
Sending 50
Got Message : 49
Sending 51
Got Message : 50
Child Exited
Child Closed

C:\Users\Andrew\git\node-child-process-fork\Test2>