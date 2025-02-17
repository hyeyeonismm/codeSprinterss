import sys

input = sys.stdin.readline

n = int(input())
n_list = list(map(int, input().split()))
m = int(input())
m_list = list(map(int, input().split()))

n_list.sort()


for i in m_list:
    left, right = 0, n - 1
    while left <= right:
        mid = (left + right) // 2
        if n_list[mid] == i:
            print(1)
            break
        elif n_list[mid] > i:
            right = mid - 1
        else:
            left = mid + 1
    else:
        print(0)
