import sys
m, n = map(int, sys.stdin.readline().split())

li = [0 for _ in range(n+1)]
for i in range(n+1):
    if i <2:
        li[i]+=2
    else:
        j=1
        while i*j<=n:
            li[i*j]+=1
            j+=1
             
for i in range(m, len(li)):
    if li[i]==1:
        print(i)
