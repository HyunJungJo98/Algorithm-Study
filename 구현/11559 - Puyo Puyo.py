from collections import deque
import sys
read = sys.stdin.readline

f = []
for i in range(12):
    s = list(read().strip())
    f.append(s)

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def bfs(x, y, visited, color):
    q = deque()
    q.append((x, y))
    visited[x][y] = 1

    a = []
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < 12 and 0 <= ny < 6:
                if visited[nx][ny] == 0 and f[i][j] == color:
                    visited[nx][ny] = 1
                    q.append((nx, ny))
                    a.append((nx, ny))


while True:
    # 4개 있는 거 찾기, 4개 뭉쳐있는게 없으면 탈출
    visited = [[0] * 6 for _ in range(12)]
    four_cnt = 0
    for i in range(12):
        for j in range(6):
            if f[i][j] != '.':
                bfs(i, j, visited, f[i][j])
                four_cnt += 1


# 터뜨리기

# 아래로 내리기
