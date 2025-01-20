import sys
input = sys.stdin.readline

stack = []

n = int(input())

for _ in range(n):
    command = input().split()
    
    if command[0] == "push":
        stack.append(int(command[1])) # 스택에 정수 X 추가
    elif command[0] == "pop":
        if stack:
            print(stack.pop()) # 스택에서 가장 위의 숫자를 꺼내고 출력
        else:
            print(-1)
    elif command[0] == "top":
        if stack:
            print(stack[-1]) # 스택의 가장 위에 있는 숫자 출력
        else:
            print(-1)
    elif command[0] == "size":
        print(len(stack))
    elif command[0] == "empty":
        if stack:
            print(0) # 스택이 비어 있지 않으면 0 출력
        else:
            print(1) # 스택이 비어 있으면 1 출력
