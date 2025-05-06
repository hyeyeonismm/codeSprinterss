import sys
sys.setrecursionlimit(10 ** 6)

def solution(begin, target, words):
    answer = 0
    length = len(words)
    visited = [False] * length
    
    def available_word(word1, word2):
        count = 0
        for i in range(len(word1)):
            if word1[i] != word2[i]:
                count += 1
        
        if count == 1:
            return True
        else:
            return False
    
    def dfs(index, depth):
        nonlocal answer
        
        if words[index] == target:
            if answer == 0:
                answer = depth
            else:
                answer = min(answer, depth)
            return
        
        for i in range(length):
            if visited[i] == True:
                continue
            
            is_available = available_word(words[i], words[index])
            if is_available == True:
                visited[i] = True
                dfs(i, depth + 1)
                visited[i] = False
    
    for start_index in range(length):
        is_available = available_word(words[start_index], begin)
        if is_available == True:
            visited[start_index] = True
            dfs(start_index, 1)
            visited[start_index] = False
            
    return answer

