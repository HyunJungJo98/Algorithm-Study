from collections import deque
import sys
read = sys.stdin.readline

def bfs(a) :
    q = deque()
    q.append(a)
    visited[a] = 1
    while q :
        na = q.popleft()
        for i in range(1, n+1) :
            if graph[na][i] == 1 and visited[i] == 0:
                q.append(i)
                visited[i]= 1

n, m = map(int, read().split())

graph = [[0] * (n+1) for _ in range(n+1)]
for i in range(m) :
    u, v = map(int, read().split())
    graph[u][v] = graph[v][u] = 1

visited = [0] * (n+1)
cnt = 0
for i in range(1, n+1) :
    if visited[i] == 0:
        bfs(i)
        cnt += 1

print(cnt)