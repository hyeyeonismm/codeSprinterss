import sys

n = int(sys.stdin.readline())

res = 0

for i in range(1, n + 1):
    tmp = str(i)  # 101
    if len(tmp) <= 2:
        res += 1
    else:
        count = 0
        an = int(tmp[1]) - int(tmp[0])  # 101 #-1
        for j in range(1, len(tmp)):
            if int(tmp[j]) - int(tmp[j - 1]) != an:
                break
            else:
                count += 1
        if count == len(tmp) - 1:  # 2
            res += 1

print(res)