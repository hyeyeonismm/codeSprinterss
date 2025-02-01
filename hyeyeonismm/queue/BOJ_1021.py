import sys
from collections import deque

n, m = map(int, sys.stdin.readline().split())

loc = list(map(int, sys.stdin.readline().split()))

dq = deque([i for i in range(1, n + 1)])
cnt=0
left=0
right=n-1
idx=0
while len(loc)>0:
    if dq[left]==loc[idx]: # left=0, right=9
        dq.popleft()
    else:
        dq[left]


