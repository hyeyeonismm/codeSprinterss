from collections import deque

n, k = map(int, input().split())  # 7 3

dq = deque(i for i in range(1, n + 1))

li = []
#  deque([1, 2, 3, 4, 5, 6, 7])
i = 1
while len(dq) != 0:
    if i < k:  # 1<3
        dq.append(dq.popleft())
        i += 1
    else:
        li.append(dq.popleft())
        i = 1

print("<" + ", ".join(map(str, li)) + ">")
