import sys

T = int(sys.stdin.readline())

for _ in range(T):
    n, k, t, m = map(int, sys.stdin.readline().split())

    # 변수 초기화
    dic = {}
    cnt = {}
    time = [0 for _ in range(n)]
    for i in range(1, n + 1):
        dic[i] = [0 for _ in range(k)]
        cnt[i] = 0

    # 문제 정보
    for mm in range(m):
        id, num, score = map(int, sys.stdin.readline().split())

        # 제출 시간 순서 구현
        time[id - 1] = mm

        # 문제 별 score 추가
        if dic[id][num - 1] == 0:
            dic[id][num - 1] += score
            cnt[id] += 1
        else:
            # 한 문제에 대해 풀이를 여러 번 제출하는 경우 max 점수를 최종 점수로 선택
            tmp = max(dic[id][num - 1], score)
            dic[id][num - 1] = tmp
            cnt[id] += 1

    # 팀 별 최종 점수 계산
    ans = {}
    for key, value in dic.items():
        ans[key] = [sum(value), cnt[key]]

    # 조건 3개에 맞춰 정렬
    sorted_ans = sorted(ans.items(), key=lambda x: (-x[1][0], x[1][1], time[x[0] - 1]))

    for i in range(len(sorted_ans)):
        if sorted_ans[i][0] == t:
            print(i + 1)
