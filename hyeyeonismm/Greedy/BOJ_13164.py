n, k = map(int, input().split())
heights = list(map(int, input().split()))

cha=[]
for i in range(1,len(heights)):
    cha.append(heights[i]-heights[i-1])

cha.sort(reverse=True)
print(sum(cha[k-1:]))

