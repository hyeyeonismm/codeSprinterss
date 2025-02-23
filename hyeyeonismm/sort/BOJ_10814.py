n = int(input())
dict = {}

for i in range(n):
    age, name = map(str, input().split())
    if age in dict.keys():
        dict[age].append(name)
    else:
        dict[age] = []
        dict[age].append(name)

sorted_dict = sorted(dict.items(), key=lambda item: int(item[0]))

for key, value in sorted_dict:
    if len(value) == 1:
        print(key, value[0])
    elif len(value) > 1:
        for i in value:
            print(key, i)
