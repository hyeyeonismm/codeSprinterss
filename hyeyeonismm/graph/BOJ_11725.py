import sys
sys.setrecursionlimit(10**6)
n = int(sys.stdin.readline())
tree={i:[] for i in range(1,n+1)}
ans=[0 for _ in range(n+1)]
visited=[False]*(n+1)

def dfs(tree,visited,i):
    visited[i]=True
    for j in tree[i]:
        if not visited[j]:
            dfs(tree, visited, j)
        else:
            ans[i]+=j

for _ in range(1,n):
    a, b = map(int, sys.stdin.readline().split())
    tree[a].append(b)
    tree[b].append(a)


parents=0
for i in range(1, n+1):
    if visited[i]==False:
        dfs(tree, visited, i)

for i in range(2, len(ans)):
    print(ans[i])