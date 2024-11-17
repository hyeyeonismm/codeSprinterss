n = int(input())
res=''

if n ==0:
    print(0)
    exit()
else:
    while n !=0:
        if n % -2 == -1:
            res='1'+res
            n= (n-1)//-2
        else:
            res='0'+res
            n = n//-2


print(int(res))