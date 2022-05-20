import sys
from collections import deque
read = sys.stdin.readline

n, m = map(int, read().split())

graph = []

for i in range(n) :
    arr = list(map(int, list(read().strip())))
    graph.append(arr)

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

answer = -1

def bfs() :
    visited = [[[0]*2 for _ in range(m)]for _ in range(n)]
    q = deque()
    q.append((0, 0, 0, 0))
    visited[0][0][0] = 1
    answer = -1

    while q : 
        # brea : 벽을 부쉈는지 여부
        x, y, brea, depth = q.popleft()
        #print(x, y, depth)
        if x == n-1 and y == m-1 :
            answer = depth + 1
            break
        for i in range(4) :
            nx, ny = x+dx[i], y+dy[i]
            if 0<=nx<n and 0<=ny<m :
                if graph[nx][ny] == 0 and visited[nx][ny][brea] == 0:
                    q.append((nx, ny, brea, depth+1))
                    visited[nx][ny][brea] = 1
                elif graph[nx][ny] == 1 and brea == 0 :
                    q.append((nx, ny, 1, depth+1))
                    visited[nx][ny][brea] = 1
    #print('result: ', result)

    return answer

print(bfs())