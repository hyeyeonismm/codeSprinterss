def solution(s):
    stk=[]
    if s[0]==')':
        return False
    for i in s:
        if i=='(':
            stk.append(i)
        else:
            if len(stk)!=0:
                stk.pop()
            else:
                return False
    if len(stk)==0:
        return True
    else:
        return False
    