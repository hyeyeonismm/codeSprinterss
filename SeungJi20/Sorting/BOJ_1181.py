n = int(input())  # 단어의 개수 입력
words = [input().strip() for _ in range(n)]  # 단어 입력 받기

words = list(set(words))  # 중복 제거
words.sort()  # 알파벳 순으로 정렬
words.sort(key=len)  # 길이 순으로 정렬

for word in words:
    print(word)
