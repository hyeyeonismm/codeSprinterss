word = input()
# 소문자 알파벳 아스키 코드 범위
alphabet = list(range(97, 123)) # a는 97, z는 122

for x in alphabet:
    print(word.find(chr(x))) # find() : 해당 문자가 처음 등장하는 인덱스를 반환, 없으면 -1