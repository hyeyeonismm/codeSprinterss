K = int(input())
stack = [] # 숫자를 저장할 스택(리스트)

for _ in range(K):
    num = int(input())
    if num == 0:
        if stack:
            stack.pop()
    else:
        stack.append(num)

print(sum(stack))