s = input()
t = input()


while len(s)!=len(t):
    if t[-1]=='A':
        t=t[:len(t)-1]
    elif t[-1]=='B':
        t=t[:len(t)-1]
        t=t[::-1]

if s ==t:
    print(1)
else:
    print(0)

# ABBA -> ABB -> BA -> A
# B
# ABBA
#######
# BA
# ABB
# ABBA

# AB
# ABB
#######
# ABA
# ABAB