import sys
import heapq

n, k = map(int, sys.stdin.readline().split())
arr=[]
weight=[]

for i in range(n):
    a, b = map(int, sys.stdin.readline().split())
    heapq.heappush(arr, (a, -b))

for j in range(k):
    weight.append(int(sys.stdin.readline()))

weight.sort()

cnt = 0
tmp = []

for i in weight: # 100 10
    while arr and arr[0][0]<=i:
        tmp_w, tmp_v = heapq.heappop(arr)
        heapq.heappush(tmp, tmp_v)
    
    if tmp:
        cnt+= -heapq.heappop(tmp)
   
print(cnt)
