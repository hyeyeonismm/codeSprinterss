# 세 정수 A, B, C 입력 받기
A = int(input())
B = int(input())
C = int(input())

# 첫 번째 출력 : 수로 생각
result1 = A + B - C
print(result1)

# 두 번째 출력: 문자열로 생각
result2 = int(str(A) + str(B)) - C
print(result2)