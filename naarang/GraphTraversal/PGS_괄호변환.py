# 균형잡힌 괄호 문자열 찾기
def step2(w):
    open_num = 0
    close_num = 0
    for i in range(len(w)):
        if w[i] == '(':
            open_num += 1
        elif w[i] == ')':
            close_num += 1

        if open_num == close_num:
            return open_num + close_num - 1

# 올바른 괄호 문자열 
def step3(u):
    open_num = 0
    
    for i in range(len(u)):
        if u[i] == '(':
            open_num += 1
        elif u[i] == ')':
            if open_num == 0:
                return False
            else:
                open_num -= 1
    
    if open_num == 0:
        return True
    else:
        return False

# 4-4 단계
def step4_4(u):
    result = ''
    for i in range(1, len(u) - 1):
        if u[i] == '(':
            result += ')'
        else:
            result += '('
    return result

def solution(p):
    answer = ''
    
    def tranformString(str):
        #1
        if str == '':
            return ''
        
        #2
        u_index = step2(str)
        u = str[:u_index + 1]
        if str == u:
            v = ''
        else:
            v = str[u_index + 1:]
            
        if step3(u) == True: #3
            result = tranformString(v)
            return u + result
        else: #4
            return '(' + tranformString(v) + ')' + step4_4(u)
    
    answer = tranformString(p)
    return answer


# 이거는 재귀 연습 문제 같은 느낌