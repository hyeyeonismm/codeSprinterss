from collections import deque


def solution(queue1, queue2):
    answer = 0
    dq1 = deque(queue1)
    dq2 = deque(queue2)
    sum_que1 = sum(dq1)
    sum_que2 = sum(dq2)

    todo_val = (sum_que1 + sum_que2) // 2

    while sum_que1 != todo_val or sum_que2 != todo_val:
        answer += 1
        # 무한루프 예외처리를 위해 answer의 최대 횟수 지정
        max_moves = 5 * (len(dq1) + len(dq2))
        if answer >= max_moves:
            return -1
        if len(dq1) == 0 or len(dq2) == 0:
            return -1

        if sum_que1 < sum_que2:
            tmp = dq2.popleft()
            dq1.append(tmp)

            sum_que1 += tmp
            sum_que2 -= tmp

        else:
            tmp = dq1.popleft()
            dq2.append(tmp)

            sum_que1 -= tmp
            sum_que2 += tmp
    return answer


print(solution([3, 2, 7, 2], [4, 6, 5, 1]))
print(solution([1, 2, 1, 2], [1, 10, 1, 2]))
print(solution([1, 1], [1, 5]))
