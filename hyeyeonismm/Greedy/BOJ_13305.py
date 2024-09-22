n = int(input())
length = list(map(int, input().split())) # 2 3 1
price = list(map(int, input().split())) # 5 2 4 1
price = price[:len(price)-1]
# 6
#     2      4      1     3   3 
# 4      3      5     2     1   
# 가격의 최소값 구하기
# 만약에 첫번째 price가 최소값이면 ..여기서 기름 다넣기
# 그렇지 않으면 리터만큼만 넣기

# i가 i+1보다 작으면 i의 price를 계속 쓰기
# dictionary로 해보기 => key가 중복이 안돼서 못씀
# for문..
min_val = price[0]

for i in range(1,len(price)):
    if min_val > price[i]:
        min_val=price[i]
    else:
        price[i]=min_val
sum_val = 0
for i in range(len(price)):
    sum_val += (price[i]*length[i])

print(sum_val)




