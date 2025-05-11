word = input()
result = ""

for ch in word:
    if 'A' <= ch <= 'Z':
        # 대문자, %26 해줘야 함!
        result += chr((ord(ch) - ord('A') + 13) % 26 + ord('A'))
    elif 'a' <= ch <= 'z':
        # 소문자
        result += chr((ord(ch) - ord('a') + 13) % 26 + ord('a'))
    else:
        # 알파벳이 아니면 그대로 추가
        result += ch

print(result)