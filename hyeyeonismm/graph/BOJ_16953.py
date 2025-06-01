import sys
from collections import deque

a, b = map(int, sys.stdin.readline().split())
answer=0
dq = deque([(a,0)])
while dq:
    v = dq.popleft()
    cnt=v[1]+1
    if v[0]*2 < b:
        dq.append((v[0]*2,cnt))
    if int(str(v[0])+'1') <b:
        dq.append((int(str(v[0])+'1'),cnt))
    if v[0]*2 == b or int(str(v[0])+'1') ==b:
        answer = cnt
        break

if answer==0:
    print(-1)
else:
    print(answer+1)