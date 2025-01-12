import sys
n = int(sys.stdin.readline())
ans =[]

for i in range(n):
    cmd = list(map(str, sys.stdin.readline().split()))
    if cmd[0]=='push':
        ans.append(int(cmd[1]))
    elif cmd[0]=='pop':
        if len(ans)==0:
            print(-1)
        else:
            print(ans[-1])
            ans.pop()
    elif cmd[0]=='size':
        print(len(ans))
    elif cmd[0]=='empty':
        print(1) if len(ans)==0 else print(0)
    elif cmd[0]=='top':
        if len(ans)==0:
            print(-1)
        else:
            print(ans[-1])

