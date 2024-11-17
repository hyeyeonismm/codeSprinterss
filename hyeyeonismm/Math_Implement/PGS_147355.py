def solution(t, p):
    tmp=[]
    for i in range(len(t)-len(p)+1): # 7 -3
        tmp.append(t[i:i+len(p)])
    answer = 0
   
    for i in tmp:
        if int(i)<=int(p):
            answer+=1
    return answer