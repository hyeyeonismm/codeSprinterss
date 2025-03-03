n = input()

dict = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0}

for i in n:
    if i == "9":
        dict[6] += 1
    else:
        dict[int(i)] += 1


if dict[6] % 2 == 0:
    dict[6] = dict[6] // 2
else:
    dict[6] = dict[6] // 2 + 1


sort_dict = sorted(dict.items(), reverse=True, key=lambda x: x[1])


print(dict[int(sort_dict[0][0])])
