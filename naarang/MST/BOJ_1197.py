import sys
sys.setrecursionlimit(10**6)

v, e = list(map(int, input().split(" ")))
answer = 0
edges = []

for i in range(e):
    a, b, c = list(map(int, input().split(" ")))
    edges.append((c, a, b))

edges.sort()

parents = [i for i in range(v + 1)]  # 각 노드의 부모를 저장

def findParent(node):
    if parents[node] != node:
        parents[node] = findParent(parents[node])
    return parents[node]

def unionParent(node1, node2):
    parent1 = findParent(node1)
    parent2 = findParent(node2)

    if parent1 < parent2:
        parents[parent2] = parent1
    else:
        parents[parent1] = parent2


def isSameParent(node1, node2):
    parent1 = findParent(node1)
    parent2 = findParent(node2)

    if parent1 == parent2:
        return True
    else:
        return False

for edge in edges:
    weight, node1, node2 = edge

    if isSameParent(node1, node2) == False:
        unionParent(node1, node2)
        answer += weight

print(answer)

# 재귀 문제를 풀 때는 기본 제귀 제한 1000에서 늘려줘야 함!
# import sys
# sys.setrecursionlimit(10**6)

# 크루스칼 알고리즘을 사용할 때 unionParent에서 경로 압축을 진행해야 더 효율적이다!