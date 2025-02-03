N, K = map(int, input().split())
arr = [] # 약수를 담을 배열

for i in range(1, N+1):
    if N % i == 0:
        arr.append(i)

# K가 약수의 개수보다 작거나 같으면, K번째 약수를 출력
if K <= len(arr):  
    print(arr[K-1])
else: # 약수가 K개 미만이면 0을 출력
    print(0)