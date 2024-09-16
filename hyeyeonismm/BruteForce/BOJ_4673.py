n = 1
arr = [0] * 10001

while n <= 10001:  
    count = 0
    if len(str(n)) < 2:
        arr[n + n] += 1  
    else:
        tmp = str(n)
        count += n
        for i in range(len(tmp)): 
            count += int(tmp[i])  
        if count > 10000:
            break
        arr[count] += 1 
    n += 1

for i in range(1, 9994):
    if arr[i] == 0:
        print(i)
