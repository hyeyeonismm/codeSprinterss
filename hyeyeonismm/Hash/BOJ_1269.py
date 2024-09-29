a_num, b_num = map(int, input().split())
a = set(map(str, input().split()))
b = set(map(str, input().split()))

cnt = 0
cnt += len(a-b)
cnt+= len(b-a)

print(cnt)