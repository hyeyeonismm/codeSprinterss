import sys
n, l = map(int, sys.stdin.readline().split())
h = list(map(int, sys.stdin.readline().split()))

h.sort()

# if h[-1]<l:
#     print(l)
# else:
for i in h:
      if i <=l:
        l+=1

print(l)
