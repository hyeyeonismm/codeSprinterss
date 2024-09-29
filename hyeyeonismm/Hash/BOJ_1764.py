import sys
n, m = map(int, sys.stdin.readline().split())
n_person=set()
m_person=set()
for i in range(n):
    n_person.add(sys.stdin.readline().strip())  

for i in range(m):
    m_person.add(sys.stdin.readline().strip())

person = sorted(list(n_person&m_person))

print(len(person))

for i in person:
    print(i)
