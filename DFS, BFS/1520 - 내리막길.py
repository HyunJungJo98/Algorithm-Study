from collections import deque
import sys
sys.setrecursionlimit(100000)

read = sys.stdin.readline

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs() :
    q = deque()
    q.append((0, 0))
    visited[0][0] = 1

    while q :
        x, y = q.popleft()
        for i in range(len(dx)) :
            if x == m-1 and y == n-1 :
                continue
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<m and 0<=ny<n :
                if graph[nx][ny] < graph[x][y] and visited[nx][ny] == 0 :
                    print(graph[nx][ny], visited[x][y])
                    q.append((nx, ny))
                    visited[nx][ny] = visited[x][y] + visited[nx][ny]
    
    return visited[m-1][n-1]

def dfs(x, y):
    if x == m-1 and y == n-1 :
        return 1
    if visited[x][y] != -1 :
        return visited[x][y]
    visited[x][y] = 0
    for i in range(len(dx)) :
        nx, ny = x + dx[i], y + dy[i]
        if 0<=nx<m and 0<=ny<n :
            if graph[nx][ny] < graph[x][y] :
                visited[x][y] = visited[x][y] + dfs(nx, ny)
    return visited[x][y]


m, n = map(int, read().split())

graph = []

for _ in range(m) :
    graph.append(list(map(int, read().split())))

visited = [[-1] * n for _ in range(m)]

print(dfs(0, 0))