import sys

r, c = map(int, sys.stdin.readline().split())
li = []

d_row = [-1, 1, 0, 0]
d_col = [0, 0, -1, 1] 

for _ in range(r):
    tmp=[]
    grid = sys.stdin.readline().strip()
    for i in grid:
        tmp.append(i)
    li.append(tmp)


def find_island(row, col, li):
    cnt=0
    for i in range(4):
        n_row = row + d_row[i]
        n_col = col + d_col[i]
        if 0 <= n_row < r and 0 <= n_col < c:
            if li[n_row][n_col]=='.':
                cnt+=1
        else:
            cnt+=1
    return cnt          

start_row=r
start_col=c
end_row = 0
end_col = 0

for i in range(len(li)):
    for j in range(len(li[i])):
        if li[i][j] == 'X':
            find_ans = find_island(i, j, li)
            if find_ans >= 3:
                li[i][j]='0'
            else:
                if i <= start_row:
                    start_row = i
                if j <= start_col:
                    start_col = j
                if end_row <= i:
                    end_row = i
                if end_col <= j:
                    end_col = j

for i in range(start_row, end_row+1):
    for j in range(start_col, end_col+1):
        if li[i][j]=='0':
            print('.', end='')
        else:
            print(li[i][j], end='')
    print()            
