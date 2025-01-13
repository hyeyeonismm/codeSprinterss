s = input()  # 문자열 입력
cnt = 0  # 연속된 숫자 그룹의 변환 횟수

for i in range(len(s) - 1):  
    if s[i] != s[i + 1]:  # 이전 문자와 현재 문자가 다르면
        cnt += 1  # 증가

# 최소 변경 횟수 출력
print((cnt + 1) // 2)
