import itertools

N = int(input())
arr = [i for i in range(1, N + 1)]

# 모든 순열 구하기
permutations = itertools.permutations(arr)

# 순열 출력
for perm in permutations:
    print(*perm)