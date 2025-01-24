import sys
from collections import deque

num = int(sys.stdin.readline())
dq = deque([])

for i in range(num):
    cmd = list(map(str, sys.stdin.readline().split()))
    if cmd[0] == "push":
        dq.append(int(cmd[1]))
    elif cmd[0] == "pop":
        if len(dq) == 0:
            print(-1)
        else:
            tmp = dq.popleft()
            print(tmp)
    elif cmd[0] == "size":
        print(len(dq))
    elif cmd[0] == "empty":
        if len(dq) == 0:
            print(1)
        else:
            print(0)
    elif cmd[0] == "front":
        if len(dq) == 0:
            print(-1)
        else:
            print(dq[0])
    elif cmd[0] == "back":
        if len(dq) == 0:
            print(-1)
        else:
            print(dq[-1])
