import sys
from collections import deque
read = sys.stdin.readline

m, n, k = map(int, read().split())

graph = [[0] * (n) for _ in range (m)]

for _ in range(k) :
    x1, y1, x2, y2 = map(int, read().split())
    for i in range(y1, y2) :
        for j in range(x1, x2) :
            graph[i][j] = 1

cnt = []
q = deque()
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
for i in range(m) :
    for j in range(n) :
        if graph[i][j] == 0 :
            count = 1
            graph[i][j] = 1
            q.append((i, j))
            while q :
                x, y = q.popleft()
                for k in range(len(dx)) :
                    nx, ny = x + dx[k], y + dy[k]
                    if 0<=nx<m and 0<=ny<n and graph[nx][ny] == 0 :
                        q.append((nx, ny))
                        count += 1
                        graph[nx][ny] = 1
            cnt.append(count)

print(len(cnt))
cnt.sort()
print(' '.join(map(str, cnt)))