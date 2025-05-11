word = input()
result = '' # 결과

for char in word:
    if char.isupper(): # 대문자라면
        result += char.lower()
    else: # 소문자라면
        result += char.upper()

print(result)