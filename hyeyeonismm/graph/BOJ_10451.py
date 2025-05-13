import sys

t = int(sys.stdin.readline())

def dfs(li, i, visited):
    visited[i] = True 
    if visited[li[i]] == False: # 5
        dfs(li,li[i], visited)

for i in range(t):
    cnt=0
    n = int(sys.stdin.readline())
    li = [0] + list(map(int, sys.stdin.readline().split()))
    visited = [False] * (n+1)
    for i in range(1, n+1):
        if visited[i]==False:
            dfs(li, i, visited)
            cnt+=1
    print(cnt)
