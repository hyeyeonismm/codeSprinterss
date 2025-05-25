import sys

n = int(sys.stdin.readline())
word= list(sys.stdin.readline().strip())
sample = {
    'AG':'C',
    'AC':'A',
    'AT':'G',
    'GA':'C',
    'GC':'T',
    'GT':'A',
    'CA':'A',
    'CG':'T',
    'CT':'G',
    'TA':'G',
    'TG':'A',
    'TC':'G'
}
n = n-1
tmp=''
while len(word)>1:
    if word[n] == word[n-1]:
        tmp=word[n]
    else:
        tmp=sample[word[n]+word[n-1]]
    word.pop()
    word.pop()
    word+=tmp
    n = len(word)-1

for i in word:
    print(i)
