def solution(k, dungeons):
    answer = -1
    length = len(dungeons)
    visited = [False] * length
    
    def dfs(start, now_power, dungeon_num):
        nonlocal answer 
        
        start_power, need_power = dungeons[start]
        
        if start_power <= now_power:
            now_power -= need_power
            dungeon_num += 1
        else:
            return
        
        answer = max(answer, dungeon_num)
    
        for i in range(length):
            if visited[i] == False:
                visited[i] = True
                dfs(i, now_power, dungeon_num)
                
                visited[i] = False

        
    
    for i in range(length):
        visited[i] = True
        dfs(i, k, 0)
        visited[i] = False
        
    return answer


# 던전의 개수가 너무 작아서 완전탐색이 가능!
# DFS로 구하는 방법 + itertools를 이용해 순열로 모든 케이스를 구한 후 탐색하는 방법도 존재!

'''
from itertools import permutations
def solution(k, dungeons):
    answer = -1
    save_k = k
    # k는 현재 피로도
    result = list(permutations(dungeons,len(dungeons)))    
    for idx in result:
        cnt = 0
        for need,use in idx:
            if save_k>=need: # 최소 피로도조건보다 같거나 큰지?
                save_k-=use
                cnt += 1
                answer = max(answer,cnt)

            else:
                save_k = k
                break

    return answer

'''