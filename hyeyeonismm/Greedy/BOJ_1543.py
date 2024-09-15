n = input()
word = input()
count=0
i=0
while i <= len(n):
    if word==n[i:i+len(word)]:
        i+=len(word)
        count+=1
    else:
        i+=1
        
print(count)


