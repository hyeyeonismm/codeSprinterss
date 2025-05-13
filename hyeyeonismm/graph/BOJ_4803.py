import sys

def tree(dic, parent, i, visited):
    visited[i]=True
    for j in dic[i]:
        if visited[j]==False:
            if tree(dic, i, j, visited)==0:
                return 0
        elif j != parent:
            return 0
    return 1

flag=1
while True:
    n, m = map(int, sys.stdin.readline().split())
    if n ==0 and m ==0:
        break
    else:
        t=0
        visited = [False] * (n+1)
        dic={}
        for _ in range(m):
            a, b = map(int, sys.stdin.readline().split())
            if a not in dic.keys():
                dic[a]=[]
            if b not in dic.keys():
                dic[b]=[]
            dic[a].append(b)
            dic[b].append(a)

        for i in range(1, n+1):
            if i in dic.keys(): # 1~6
                if visited[i]==False:
                    if tree(dic, 0, i, visited):
                        t+=1
            else:
                t+=1 #    
    
    if t ==0:
        print(f'Case {flag}: No trees.')
    elif t == 1:
        print(f'Case {flag}: There is one tree.')
    else:
        print(f'Case {flag}: A forest of {t} trees.')
    flag+=1
