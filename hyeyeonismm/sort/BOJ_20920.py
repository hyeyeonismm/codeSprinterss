import sys
n, m = map(int, sys.stdin.readline().split())
li={}

for _ in range(n):
    tmp = sys.stdin.readline().strip()
    if len(tmp)>=m:
        if tmp in li.keys():
            li[tmp]+=1
        else:
            li[tmp]=1


sorted_li = sorted(li.items(), key=lambda x: (-x[1] , -len(x[0]), x[0]))

for key, value in sorted_li:
    print(key)
    