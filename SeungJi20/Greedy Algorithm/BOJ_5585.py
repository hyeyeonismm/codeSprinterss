price = int(input()) # 물건 가격 입력받기
change = 1000 - price

coins = [500, 100, 50, 10, 5, 1]
count = 0

for coin in coins:
    count += change//coin
    change %= coin
    
print(count)