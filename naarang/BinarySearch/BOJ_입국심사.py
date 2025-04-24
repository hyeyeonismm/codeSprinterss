def solution(n, times):
    answer = 0
    max_time = max(times)
    
    
    start = 0
    end = max_time * n
    
    while start < end:
        print(start, end)
        mid = (start + end) // 2
        
        total = 0
        for time in times:
            total += (mid // time)
            
        if total >= n:
            end = mid
        else:
            start = mid + 1
            
    answer = start
    return answer


# 완전 탐색으로 하면 시간 초과 + 최소 시간을 구하는 것이므로 이진 탐색