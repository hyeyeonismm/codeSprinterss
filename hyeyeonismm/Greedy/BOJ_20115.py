n = int(input())
drinks = list(map(int, input().split()))

drinks.sort(reverse=True)

start=0
end=-1
while len(drinks)!=1:
    drinks[start] = drinks[start] + (drinks[end]/2)
    drinks.pop()

print(drinks[0])

