s = input().strip() # 입력받은 문자열
count = [0] * 26 # 알파벳 개수를 저장할 리스트

for char in s:
    count[ord(char) - ord('a')] += 1

for c in count:
    print(c, end=" ") # 수평 출력