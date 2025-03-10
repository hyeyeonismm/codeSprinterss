N = int(input())  
F= int(input())  

N2 = (N // 100) * 100  

for i in range(100):
    if (N2 + i) % F == 0: # 나누어 떨어지는 경우
        # 두 자리 숫자로 출력(한 자리일 경우 앞에 0 붙임)
        print(f"{i:02d}")
        break