from collections import deque
import sys
sys.setrecursionlimit(10000)
read = sys.stdin.readline

dx = [0, 0, 1, -1, 1, -1, 1, -1]
dy = [1, -1, 0, 0, 1, -1, -1, 1]

def dfs(x, y) :
    visit_list[x][y] = 1

    for i in range(len(dx)) :
        nx, ny = x + dx[i], y + dy[i]
        if 0<=nx<h and 0<=ny<w :
            if visit_list[nx][ny] == 0 and graph[nx][ny] == 1 :
                dfs(nx, ny)
    

def bfs(x, y) :
    q = deque()
    q.append((x, y))
    visit_list[x][y] = 1

    while q :
        x, y = q.popleft()
        for i in range(len(dx)) :
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<h and 0<=ny<w :
                if visit_list[nx][ny] == 0 and graph[nx][ny] == 1 :
                    q.append((nx, ny))
                    visit_list[nx][ny] = 1

while True :
    w, h = map(int, read().split())
    if w == 0 and h == 0 :
        break
    graph = [[0] * w for _ in range(h)]
    visit_list = [[0] * w for _ in range(h)]
    cnt = 0
    
    for i in range(h) :
        graph[i] = list(map(int, read().split()))

    for i in range(h) :
        for j in range(w) :
            if visit_list[i][j] == 0 and graph[i][j] == 1 :
                bfs(i, j)
                #dfs(i, j)
                cnt = cnt + 1

    print(cnt)
