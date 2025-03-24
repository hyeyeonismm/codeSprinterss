n = int(input())
n_li = list(map(int, input().split()))
m = int(input())
m_li = list(map(int, input().split()))

sorted_li = sorted(m_li)

dict = {}

for i in n_li:
    left = 0
    right = m - 1
    while left <= right:
        mid = (left + right) // 2
        if sorted_li[mid] == i:
            if i in dict.keys():
                dict[i] += 1
            else:
                dict[i] = 1
            break
        elif sorted_li[mid] < i:
            left = mid + 1
        elif sorted_li[mid] > i:
            right = mid - 1

for i in m_li:
    if i in dict.keys():
        print(dict[i], end=" ")
    else:
        print(0, end=" ")
