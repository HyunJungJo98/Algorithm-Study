from collections import deque
import sys

read = sys.stdin.readline

def dfs(x, y) :
    visit_list[x][y] = 1
    global homeCnt
    homeCnt = homeCnt + 1

    for i in range(len(dx)) :
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0<= ny < n :
            if visit_list[nx][ny] == 0 and graph[nx][ny] == 1 :
                dfs(nx, ny)

def bfs(x, y) :
    q = deque()
    visit_list[x][y] = 1
    q.append((x, y))
    
    while q :
        x, y = q.popleft()
        global homeCnt
        homeCnt = homeCnt + 1
        for i in range(len(dx)) :
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0<= ny < n :
                if visit_list[nx][ny] == 0 and graph[nx][ny] == 1 :
                    q.append((nx, ny))
                    visit_list[nx][ny] = 1

n = int(read())

graph = [[0]*n for _ in range(n)]

for i in range(n) :
    graph[i] = list(map(int, read().strip()))

visit_list = [[0]*n for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

homeCnt = 0
cnt = 0
homeCntList = []

for i in range(n) :
    for j in range(n) :
        if visit_list[i][j] == 0 and graph[i][j] == 1 :
            cnt = cnt + 1
            homeCnt = 0
            #dfs(i, j)
            bfs(i, j)
            homeCntList.append(homeCnt)

print(cnt)
homeCntList.sort()
for i in homeCntList :
    print(i)
