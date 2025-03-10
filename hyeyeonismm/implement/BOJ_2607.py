n = int(input())
li = [input() for _ in range(n)]

standard = li[0]
cnt = 0

for i in range(1, len(li)):
    if abs(len(li[i]) - len(standard)) > 1:
        continue

    standard_cnt = {}
    li_cnt = {}

    for char in standard:
        standard_cnt[char] = standard_cnt.get(char, 0) + 1

    for char in li[i]:
        li_cnt[char] = li_cnt.get(char, 0) + 1

    diff = 0
    for char in set(standard + li[i]):
        diff += abs(standard_cnt.get(char, 0) - li_cnt.get(char, 0))

    if diff <= 2:
        cnt += 1

print(cnt)
