from collections import deque
import sys
sys.setrecursionlimit(100000)

read = sys.stdin.readline

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def dfs(x, y) :
    visited[x][y] = 1

    for i in range(len(dx)):
        nx, ny = dx[i] + x, dy[i] + y
        if 0<= nx < n and 0<= ny < n :
            if visited[nx][ny] == 0 and graph[nx][ny] == graph[x][y] :
                visited[nx][ny] = 1
                dfs(nx, ny)

def bfs(x, y) :
    q = deque()
    q.append((x, y))
    visited[x][y] = 1

    while q :
        x, y = q.popleft()
        for i in range(len(dx)):
            nx, ny = dx[i] + x, dy[i] + y
            if 0<= nx < n and 0<= ny < n :
                if visited[nx][ny] == 0 and graph[nx][ny] == graph[x][y] :
                    q.append((nx, ny))
                    visited[nx][ny] = 1

n = int(read())

graph = [list(read().strip()) for _ in range(n)]
visited = [[0]*n for _ in range(n)]

cnt_yes = 0
for i in range(n) :
    for j in range(n) :
        if visited[i][j] == 0 :
            cnt_yes += 1
            bfs(i, j)

cnt_no = 0
visited = [[0]*n for _ in range(n)]
for i in range(n) :
    for j in range(n) :
        if graph[i][j] == 'R' :
            graph[i][j] = 'G'

for i in range(n) :
    for j in range(n) :
        if visited[i][j] == 0 :
            cnt_no += 1
            bfs(i, j)

print(cnt_yes, end = ' ')
print(cnt_no)