n = int(input())
line = 1

while n > line:
    n -= line
    line += 1

if line % 2 == 0:
    za = n
    mo = line - n + 1
else:
    za = line - n + 1
    mo = n


print(f"{za}/{mo}")
