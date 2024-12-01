def solution(s):
    answer = [0,0]

    while s != '1': 
        ans=''
        answer[0]+=1
        answer[1] += s.count('0')
        s = s.replace('0','')
        new_s = len(s)
        
        while new_s:
            ans+= str(new_s%2) 
            new_s //=2 
        s = ans

    return answer