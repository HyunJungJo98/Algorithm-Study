from collections import deque
import sys

read = sys.stdin.readline

def bfs(x, y) :
    q = deque()
    q.append((x, y))
    
    while q :
        x, y = q.popleft()

        if x == n-1 and y == m-1:
            print(visit_list[x][y])
            break

        for i in range(len(dx)) :
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0<=nx<n and 0<=ny<m :
                if visit_list[nx][ny] == 0 and graph[nx][ny] == 1 :
                    visit_list[nx][ny] = visit_list[x][y] + 1
                    q.append((nx, ny))

    
    

n, m = map(int, read().split())

graph = [[0] * m for _ in range(n)]

for i in range(n):
    graph[i] = list(map(int, read().strip()))

visit_list = [[0] * m for _ in range(n)]


dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


visit_list[0][0] = 1
bfs(0, 0)
#print(visit_list[n-1][m-1])
