N = int(input())
count = N # 처음에는 전부 그룹 단어라고 가정

for i in range(N):
    word = input() # 단어 하나 입력
    for j in range(0, len(word)-1): # 인접한 문자 비교
        if word[j] == word[j+1]:
            pass
        elif word[j] in word[j+1:]: # 떨어졌다가 다시 나오면
            count -= 1 # 그룹 단어가 아님
            break

print(count)