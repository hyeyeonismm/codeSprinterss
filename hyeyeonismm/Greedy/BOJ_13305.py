n = int(input())
length = list(map(int, input().split())) 
price = list(map(int, input().split())) 
price = price[:len(price)-1]
min_val = price[0]
sum_val = 0
for i in range(1,len(price)):
    if min_val > price[i]:
        min_val=price[i]
    else:
        price[i]=min_val

for i in range(len(price)):
    sum_val += (price[i]*length[i])

print(sum_val)

