from collections import deque
import sys
read = sys.stdin.readline

dx = [1, -1, 0, 0, 0, 0]
dy = [0, 0, 1, -1, 0, 0]
dz = [0, 0, 0, 0, 1, -1]

m, n, h = map(int, read().split())

def bfs() :
    while q :
        z, y, x = q.popleft()

        for i in range(len(dx)) :
            nx, ny, nz = x + dx[i], y + dy[i], z + dz[i]
            if 0<=nx<m and 0<=ny<n and 0<=nz<h :
                if graph[nz][ny][nx] == 0 :
                    #그 전 걸 더해서 걸린 날짜 구하기
                    graph[nz][ny][nx] = graph[z][y][x] + 1
                    q.append((nz, ny, nx))

q = deque()
graph = []
for i in range(h) :
    a = []
    for j in range(n) :
        a.append(list(map(int, read().split())))
    graph.append(a)


for i in range(h) :
    for j in range(n) :
        for k in range(m) :
            if graph[i][j][k] == 1 :
                #bfs(i, j, k)는 안 됨
                q.append((i, j, k))

bfs()

num = 0
isTrue = False

for i in range(h) :
    for j in range(n) :
        for k in range(m) :
            if graph[i][j][k] == 0 :
                isTrue = True
            num = max(num, graph[i][j][k])

if isTrue == True :
    print(-1)
else :
    print(num-1)
