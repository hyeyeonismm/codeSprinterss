t = int(input())

for _ in range(t):
    dict = {}
    n = int(input())
    i = 2
    while n > 1:
        if n % i == 0:
            n //= i
            if i not in dict.keys():
                dict[i] = 1
            else:
                dict[i] += 1
        else:
            i += 1

    for key, value in dict.items():
        print(key, value)
