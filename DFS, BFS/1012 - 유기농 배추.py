from collections import deque
import sys

read = sys.stdin.readline

def bfs(x, y) :
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    q = deque()
    q.append((x, y))
    visit_list[x][y] = 1

    while q :
        x, y = q.popleft()
        for i in range(len(dx)) :
            nx, ny = x+dx[i], y+dy[i]
            if 0<=nx<n and 0<=ny<m :
                if visit_list[nx][ny] == 0 and graph[nx][ny] == 1 :
                    q.append((nx, ny))
                    visit_list[nx][ny] = 1

#탐색 시작할 노드 찾기
def searchStart(graph, visit_list) :
    for i in range(n) :
        for j in range(m) :
            if visit_list[i][j] == 0 and graph[i][j] == 1 :
                global cnt
                cnt = cnt + 1
                bfs(i, j)

t = int(read())

for _ in range(t):
    m, n, k = map(int, read().split())
    graph = [[0] * m for _ in range(n)]
    visit_list = [[0] * m for _ in range(n)]
    cnt = 0
    for _ in range(k) :
        a, b = map(int, read().split())
        graph[b][a] = 1
    searchStart(graph, visit_list)
    print(cnt)


