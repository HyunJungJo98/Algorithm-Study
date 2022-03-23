from collections import deque
import sys

read = sys.stdin.readline

n, m = map(int, read().split())

graph = [[0] * m for _ in range(n)]

for i in range(n):
    graph[i] = list(map(int, read().strip()))

visit_list = [[0] * m for _ in range(n)]

# 방향을 나타냄
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]


q = deque([(0, 0)])
# 첫 번째 위치가 문제에 주어져 있으므로 1로 변경
visit_list[0][0] = 1

while q:
    x, y = q.popleft()

    # 미로의 끝에 도달 했을 때 해당 미로의 값을 호출
    if x == n-1 and y == m-1:
        print(visit_list[x][y])
    
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]

        if 0 <= nx < n and 0 <= ny < m:
            if visit_list[nx][ny] == 0 and graph[nx][ny] == 1:
                visit_list[nx][ny] = visit_list[x][y] + 1
                q.append((nx, ny))
