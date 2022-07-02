from collections import deque
from re import L
import sys
read = sys.stdin.readline

n, m = map(int, read().split())

graph = []

for i in range(n):
    graph.append(list(map(int, read().split())))


dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def init(graph):
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 2 or graph[i][j] == 'C':
                graph[i][j] = 0

# 공기 접촉면적 찾기
# 치즈 내부이면 그대로 0, 외부이면 2로 바꿔줌


def bfs(x, y):
    q = deque()
    q.append((x, y))
    graph[x][y] = 2
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and (graph[nx][ny] == 0 or graph[nx][ny] == 'C'):
                graph[nx][ny] = 2
                q.append((nx, ny))


def dis(graph):
    for i in range(n):
        for j in range(m):
            cur = graph[i][j]
            if cur == 1:
                out = 0
                for k in range(4):
                    nx = i + dx[k]
                    ny = j + dy[k]

                    if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 2:
                        out += 1
                if out >= 2:
                    graph[i][j] = 'C'


result = 0
# print()
while any(1 in g for g in graph):
    a = True
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 0:
                bfs(i, j)
                a = False
                break
        if not a:
            break

    dis(graph)
    # for i in range(n):
    #     print(*graph[i])
    result += 1
    init(graph)
    # print()
    # for i in range(n):
    #     print(*graph[i])
    # print('---------')
print(result)
