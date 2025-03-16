import sys
A, B = map(int, sys.stdin.readline().split())
sequence = []
for i in range(1, B + 1): # B까지 만듦
    for j in range(i):
        sequence.append(i)
print(sum(sequence[A - 1:B]))