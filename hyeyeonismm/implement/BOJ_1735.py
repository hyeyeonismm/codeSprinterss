ja1, mo1 = map(int, input().split())
ja2, mo2 = map(int, input().split())

mo = mo1 * mo2
ja = ja1 * mo2 + ja2 * mo1

if mo >= ja:
    big_num = mo
    small_num = ja
else:
    big_num = ja
    small_num = mo

while small_num > 0:
    tmp = big_num % small_num
    big_num = small_num
    small_num = tmp

print(ja // big_num, mo // big_num)
