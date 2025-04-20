import heapq

def solution(food_times, k):
    answer = 0
    length = len(food_times)
    sum_value = 0 # 현재 시간
    previous = 0 # 현재 위치한 음식 번호
    
    if sum(food_times) <= k:
        return -1
    
    food_heap = []
    for i in range(length):
        heapq.heappush(food_heap, (food_times[i], i + 1));
     
    while food_heap:
        min_food = food_heap[0][0]
        time_to_spend = (min_food - previous) * length;
        
        if sum_value + time_to_spend > k:
            break
        sum_value += time_to_spend
        heapq.heappop(food_heap)
        length -= 1
        previous = min_food
    
    # 남은 음식들을 번호순으로 정렬
    result = sorted(food_heap, key= lambda x: x[1])
    return result[(k - sum_value) % length][1]

# 최소 힙(min-heap) 을 활용해 가장 적게 걸리는 음식부터 순차적으로 제거하면서 K를 줄여나가는 방식

