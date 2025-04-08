n = int(input())
cards = list(range(1, n + 1))
result = [] # 리스트 사용

while len(cards) > 1:
    result.append(cards.pop(0)) # 맨 앞 카드 버리기
    cards.append(cards.pop(0)) # 맨 앞 카드를 맨 뒤로 보내기

result.append(cards[0]) # 마지막 한 장도 결과에 추가
print(*result)