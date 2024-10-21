while True:
    try:
        n = int(input())
        i='1'  
        while int(i)%n!=0:
            i+='1'
        print(len(i))
    except EOFError:
        break
        