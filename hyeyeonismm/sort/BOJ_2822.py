import sys

li = [int(sys.stdin.readline()) for i in range(8)]

tmp = sorted(li, reverse=True)
tmp = tmp[:5]

print(sum(tmp))
for i in li:
    if i in tmp:
        print(li.index(i)+1, end=" ")