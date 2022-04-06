import sys
read = sys.stdin.readline
from itertools import groupby

n = int(read())

dx = [0, 1]
dy = [1, 0]

board = []
for i in range(n) :
    board.append(list(read().strip()))

def find() :
    answer = 1
    
    for i in range(n) :
        cnt1 = 1
        for j in range(1, n) :
            # 왼쪽 거랑 같으면 cnt += 1
            if board[i][j-1] == board[i][j]:
                cnt1 += 1
            else :
                cnt1 = 1
            if answer < cnt1 :
                answer = cnt1
    
    for i in range(n) :
        cnt2 = 1
        for j in range(1, n):
            # 위쪽이랑 같으면 cnt2 += 1
            if board[j-1][i] == board[j][i] :
                cnt2 += 1
            else :
                cnt2 = 1

            if answer < cnt2 :
                answer = cnt2
    return answer
            
result = []

for i in range(n) :
    for j in range(n) :
        current = board[i][j]
        # 오른쪽(열) 바꾸기
        if 0<=j+1<n :
            if board[i][j+1] != current :
                board[i][j] = board[i][j+1]
                board[i][j+1]=current
                result.append(find())
                board[i][j+1] = board[i][j]
                board[i][j] = current
        # 아래(행) 바꾸기
        if 0<=i+1<n :
            if board[i+1][j] != current :
                board[i][j] = board[i+1][j]
                board[i+1][j] = current
                result.append(find())
                board[i+1][j] = board[i][j]
                board[i][j] = current

if len(result) == 0 :
    print(0)
else :
    print(max(result))