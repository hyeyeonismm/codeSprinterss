n = int(input())
arr = list(map(int, input().split()))
x = int(input())
cnt = 0

arr.sort()
left = 0
right = 0

while arr[left] < arr[right - 1]:
    if arr[left] + arr[right - 1] == x:
        cnt += 1
        left += 1
        right -= 1
    elif arr[left] + arr[right - 1] < x:
        left += 1
    else:
        right -= 1


print(cnt)