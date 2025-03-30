word = input()
words = [] # 가능한 모든 조합을 저장할 리스트

# 단어를 세 부분으로 나누는 과정정
for i in range(1, len(word)): # 첫 번째 자르는 위치
    for j in range(i + 1, len(word)): # 두 번째 자르는 위치

        sort1 = ''.join(reversed(word[:i]))
        sort2 = ''.join(reversed(word[i:j]))
        sort3 = ''.join(reversed(word[j:]))

        words.append(sort1 + sort2 + sort3)

# sorted() : 사전 순 정렬
print(sorted(words)[0])