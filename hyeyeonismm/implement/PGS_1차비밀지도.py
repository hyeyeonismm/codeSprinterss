def make_map(n, arr):
    map = []
    for i in arr:
        tmp = str(bin(i))[2:]
        if len(tmp) < n:
            tmp = "0" * (n - len(tmp)) + tmp
            map.append(tmp)
        else:
            map.append(tmp)
    return map


def solution(n, arr1, arr2):
    answer = ["" for _ in range(n)]
    map1 = make_map(n, arr1)
    map2 = make_map(n, arr2)
    i = 0
    while i < n:
        for j in range(n):
            if map1[i][j] == "0" and map2[i][j] == "0":
                answer[i] += " "
            else:
                answer[i] += "#"
        i += 1

    print(answer)
    return answer


solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
# # ["#####","# # #", "### #", "# ##", "#####"]

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
# # ["######", "### #", "## ##", " #### ", " #####", "### # "]
