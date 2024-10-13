def solution(s):
    s = s.replace(' ', '-')
    tmp = list(map(str, s.split('-'))) #9
    for i in range(len(tmp)):
        if tmp[i]!='':        
            tmp[i] = tmp[i].lower()
            tmp[i] = tmp[i][0].upper() + tmp[i][1:]
    answer=''
    print(tmp)
    answer = ' '.join(tmp)
    return answer