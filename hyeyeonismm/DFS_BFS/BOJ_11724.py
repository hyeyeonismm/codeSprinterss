import sys

n, m = map(int, sys.stdin.readline().split())
graph = [[] for _ in range(n + 1)]

for i in range(m):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

ans = 0
visited = [False] * (n + 1)


# 1 2 5
# [[], [2, 5], [1, 5], [4], [3, 6], [2, 1], [4]]
def dfs(v):
    visited[v] = True
    cnt = 0
    global ans
    for i in graph[v]:
        if visited[i] == False:
            dfs(i)
        else:
            cnt += 1
    if cnt == len(graph[v]):
        ans += 1
        print(visited)
        if visited.count(0) > 0:
            dfs(visited.index(False, 2))
        else:
            print(ans)


dfs(1)
