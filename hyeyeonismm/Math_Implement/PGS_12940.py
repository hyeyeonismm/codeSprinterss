def solution(n, m):
    tmp1=n
    tmp2=m
    if n >= m:
        while m!=0:    
            n,m = m,n%m # 5 2 #2 1
        min_ans = n
    else: #m=5 n=2
        while n!=0: # 2 #1
            m,n = n,m%n
        min_ans = m
    max_ans = min_ans * (tmp1//min_ans) * (tmp2//min_ans)
    
    answer = [min_ans, max_ans]
    return answer