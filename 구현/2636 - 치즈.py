from collections import deque
import sys
read = sys.stdin.readline

h, w = map(int, read().split())
board = []

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def init():
    for i in range(h):
        for j in range(w):
            if board[i][j] == 'c' or board[i][j] == 2:
                board[i][j] = 0


def bfs(x, y):
    q = deque()
    q.append((x, y))
    board[x][y] = 2
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < h and 0 <= ny < w and board[nx][ny] == 0:
                board[nx][ny] = 2
                q.append((nx, ny))


def melt():
    cnt = 0
    for i in range(h):
        for j in range(w):
            if board[i][j] == 1:
                for k in range(4):
                    nx, ny = i + dx[k], j + dy[k]
                    if 0 <= nx < h and 0 <= ny < w and board[nx][ny] == 2:
                        board[i][j] = 'c'
                        cnt += 1


for i in range(h):
    board.append(list(map(int, read().split())))

cnt = 0

while any(1 in g for g in board):
    cheese = 0
    a = True
    for i in range(h):
        for j in range(w):
            if board[i][j] == 0:
                bfs(i, j)
                a = False
                break
        if not a:
            break

    melt()
    for i in range(h):
        cheese += board[i].count('c')
    cnt += 1
    init()

print(cnt)
print(cheese)
