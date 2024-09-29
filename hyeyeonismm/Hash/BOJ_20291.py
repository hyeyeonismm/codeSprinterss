n = int(input())
files={}
for _ in range(n):
    a,b = map(str,input().split('.'))
    if b not in files:
        files[b]=1
    else:
        files[b]+=1

files = sorted(files.items())

for key, val in files:
    print(key, val)
