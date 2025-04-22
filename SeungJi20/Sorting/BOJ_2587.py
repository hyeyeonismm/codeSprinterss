numbers = []

for _ in range(5):
    num = int(input())
    numbers.append(num)

avg = sum(numbers) // 5
med = sorted(numbers)[2]

print(avg)
print(med)