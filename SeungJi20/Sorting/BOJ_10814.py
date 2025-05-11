N = int(input())
user = []
for _ in range(N):
    age, name = input().split()
    user.append([int(age),name])
    
# 나이 순으로 먼저 정렬하고, 나이가 같으면 입력 순서대로 출력됨됨 
for i in sorted(user,key=lambda x : x[0]):
    print(i[0],i[1])
