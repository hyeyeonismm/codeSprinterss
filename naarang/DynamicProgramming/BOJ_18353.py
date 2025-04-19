n = int(input())
soldiers = list(map(int, input().split(" ")))

lis = [soldiers[0]]

def binary_search(target):
    start = 0
    end = len(lis) - 1

    while start < end:
        mid = (start + end) // 2

        if target <= lis[mid]:
            end = mid
        else:
            start = mid + 1

    return start

for i in range(n):
    if lis[-1] < -soldiers[i]:
        lis.append(-soldiers[i])
    else:
        index = binary_search(-soldiers[i])
        lis[index] = -soldiers[i]


print(n - len(lis))

# LIS 알고리즘을 사용하자! -> 이분 탐색을 이용한 방식 O(nlogn)
# 내림차순으로 정렬하는 코드를 작성하고 -만 붙여서 오름차순 정렬도 가능하다!
