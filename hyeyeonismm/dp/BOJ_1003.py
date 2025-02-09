import sys

t = int(sys.stdin.readline())
ans = [[0, 0] for _ in range(41)]  # 0과 1
ans[0] = [1, 0]
ans[1] = [0, 1]

for i in range(t):
    n = int(sys.stdin.readline())
    if n == 0:
        print(ans[0][0], ans[0][1])
    elif n == 1:
        print(ans[1][0], ans[1][1])
    else:
        for i in range(2, n + 1):  # 2~4
            ans[i][0] = ans[i - 1][0] + ans[i - 2][0]  # ans[2] = ans[1]+ans[0]
            ans[i][1] = ans[i - 1][1] + ans[i - 2][1]
        print(ans[i][0], ans[i][1])
