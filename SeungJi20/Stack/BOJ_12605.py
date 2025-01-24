n = int(input())
sentences = [input() for _ in range(n)]

for i, sentence in enumerate(sentences, 1):
    words = sentence.split() # 공백으로 나눠 단어 리스트 생성
    reversed_sentence = " ".join(reversed(words)) # 단어 순서를 뒤집고 다시 합침
    print(f"Case #{i}: {reversed_sentence}")
