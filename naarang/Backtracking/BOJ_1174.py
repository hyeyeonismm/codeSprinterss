n = int(input())
result = []

def dfs(num, depth):
    if depth > 10:
        return

    result.append(num)
    last = num % 10
    for i in range(last):
        dfs(num * 10 + i, depth + 1)

for i in range(10):
    dfs(i, 1) # i=3이면 3, 30, 31, 32, 320 이런 식으로 추가 됨

result.sort()

print(result)

if len(result) < n:
    print(-1)
else:
    print(result[n - 1])


'''
1의 자리 : 0 ~ 9
2의 자리 :
10
20 21
32 31 32 30
...
3의 자리 :
210
310 320 321
410 420 421 430 431 432 430
...
4의 자리 :
3210
...

최대값 : 9876543210
'''

# 따라서 모든 수가 얼마 안되므로 완전 탐색 가능! -> DFS 사용해 모든 경우의 수를 미리 구해놓고 찾기
