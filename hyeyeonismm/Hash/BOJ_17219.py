n, m = map(int, input().split())
dict={}
for _ in range(n):
    site, password = map(str, input().split())
    dict[site]=password
    
res=[]
for i in range(m):
    res.append(input())


for i in res:
    print(dict[i])

