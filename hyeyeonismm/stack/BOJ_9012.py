import sys

input = sys.stdin.readline
t = int(input())

for i in range(t):
    flag = 1
    tmp = []
    brackets = input()
    for bracket in brackets:
        if bracket == "(":
            tmp.append("(")
        elif bracket == ")":
            if len(tmp) != 0:
                tmp.pop()
            else:
                flag = 0
                break

    if len(tmp) == 0 and flag == 1:
        print("YES")
    else:
        print("NO")
