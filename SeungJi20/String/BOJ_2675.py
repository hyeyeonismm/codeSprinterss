T = int(input())

for _ in range(T):
    r, s = input().split()
    r = int(r) # 형 변환 무조건!
    result = ''
    
    for char in s:
        result += char * r
    print(result)