import sys


def fn(num):
    if num == 1:
        return 1
    elif num == 2:
        return 2
    elif num == 3:
        return 4
    else:
        return fn(num - 1) + fn(num - 2) + fn(num - 3)


t = int(sys.stdin.readline())
for i in range(t):
    num = int(sys.stdin.readline())
    print(fn(num))
