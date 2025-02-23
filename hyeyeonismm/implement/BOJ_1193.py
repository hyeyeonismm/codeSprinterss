n = int(input())

li = [0]
i = 1
tmp = 1
while tmp < n:
    li.append(tmp)
    tmp = tmp + (i + 1)
    i += 1

flag = i + 1

if flag % 2 == 0:
    mo = 0
    za = flag
    for i in range(li[-1], n):
        mo += 1
        za -= 1
else:
    za = 0
    mo = flag
    for i in range(li[-1], n):
        mo -= 1
        za += 1


print(f"{za}/{mo}")
