word = input()
string = []

for i in word:
    string += i
    if len(string) == 10: # '==' 비교
        print("".join(string)) # 리스트를 문자열 변환해서 출력!!
        string = [] # 다시 초기화

# 반복문이 끝난 후, 남은 글자가 있다면 출력
if string:
    print("".join(string))
    
    
# 슬라이싱 이용한 풀이
# n = input()

# for i in range(0, len(n), 10):
#     print(n[i:i+10])

