from collections import deque
import sys
sys.setrecursionlimit(100000)

read = sys.stdin.readline

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

q = deque()

def bfs() :

    while q :
        x, y = q.popleft()
        
        for i in range(len(dx)) :
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<n and 0<=ny<m :
                if graph[nx][ny] == 0 :
                    q.append((nx, ny))
                    graph[nx][ny] = graph[x][y] + 1
                    #cnt_list.append(graph[nx][ny])
                    

# m = 가로수, n = 세로수
m, n = map(int, read().split())

graph = [[0] * m for _ in range(n)]
#visit_list = [[0] * m for _ in range(n)]

for i in range(n) :
    graph[i] = list(map(int, read().split()))

#cnt_list = []

for i in range(n) :
    for j in range(m) :
        if graph[i][j] == 1 :
            q.append((i, j))

bfs()

result = 0

for i in graph :
    for j in i :
        if j == 0 :
            print(-1)
            exit(0)
    result = max(result,max(i))


print(result-1)
