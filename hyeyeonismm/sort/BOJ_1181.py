n = int(input())
dict = {}
for i in range(n):
    tmp = input()
    if len(tmp) in dict.keys():
        if tmp not in dict[len(tmp)]:
            dict[len(tmp)].append(tmp)
    else:
        dict[len(tmp)] = [tmp]

sorted_dict = sorted(dict.items(), key=lambda x: x[0])

for key, value in sorted_dict:
    if len(value) != 1:
        value.sort()
    for i in value:
        print(i)
