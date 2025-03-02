x = input()
ans = 0
while len(x) > 1:
    tmp = 0
    for i in x:
        tmp += int(i)
    x = str(tmp)
    ans += 1

print(ans)
if int(x) % 3 == 0:
    print("YES")
else:
    print("NO")
