def solution(s):
    s = s.split(' ')
    ans=''
    for i in s:
        for j in range(len(i)):
            if i[j]=='':
                ans+=' '
            else:
                if j==0:
                    ans += i[j].upper()
                elif j%2==0:
                    ans += i[j].upper()
                else:
                    ans += i[j].lower()
        ans += ' '
    return ans[:-1]