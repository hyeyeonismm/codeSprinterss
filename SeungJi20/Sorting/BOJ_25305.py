n, k = map(int, input().split())
scores = list(map(int, input().split()))  # n개의 점수를 리스트로 받음

scores.sort(reverse=True) # 점수를 내림차순 정렬
print(scores[k - 1]) # k번째 점수를 출력 (인덱스로 k-1)