import sys
n = int(sys.stdin.readline())
ans=[]
for i in range(n):
    ans.append(int(sys.stdin.readline()))

stack=[]
sign = []
current = 1

for i in ans:
    while current <= i:
        stack.append(current) 
        sign.append('+')
        current += 1
    if stack[-1] == i: 
        stack.pop() 
        sign.append('-')
    else:
        print("NO")
        break

if len(stack)==0:
    for i in sign:
        print(i)
