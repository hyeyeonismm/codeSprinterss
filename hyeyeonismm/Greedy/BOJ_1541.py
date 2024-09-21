n = input()

n = n.split('-')

for i in range(len(n)):
    if '+' in n[i]:
        ss = list(map(int, n[i].split('+')))
        n[i] = sum(ss)
    else:
        n[i]=int(n[i])

summ=n[0]
for i in range(1,len(n)):
    summ-=n[i]
print(summ)
        
   