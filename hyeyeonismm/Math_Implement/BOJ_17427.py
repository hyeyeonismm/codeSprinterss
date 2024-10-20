import sys
n = int(sys.stdin.readline())

sum_v = 0
for i in range(1, n+1):
    sum_v += (n//i)*i

print(sum_v)
