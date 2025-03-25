def solution(today, terms, privacies):
    answer = []
    months = {}

    # 오늘 날짜 파싱
    today = list(map(int, today.split(".")))

    # 약관 종류에 따른 개월수 dictionary로 저장
    for i in terms:
        a, b = map(str, i.split(" "))
        months[a] = int(b)

    # 개인정보 수집일자 파싱
    for i in range(len(privacies)):
        p_date, key = privacies[i].split(" ")
        year, month, day = map(int, p_date.split("."))
        month += months[key]

        # 개인정보 수집일자 + 약관 유효 개월수
        if month > 12:
            year += month // 12
            if month % 12 != 0:
                month %= 12
            else:
                year -= 1
                month = 12

        # 조건 검사 (약관이 지난 경우 answer에 추가)
        if year < today[0]:
            answer.append(i + 1)
            continue
        elif year == today[0]:
            if month < today[1]:
                answer.append(i + 1)
                continue
            elif month == today[1]:
                if day <= today[2]:
                    answer.append(i + 1)
                    continue

    return answer


solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"],
)
