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
    a.append((x, y))
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < 12 and 0 <= ny < 6:
                if visited[nx][ny] == 0 and f[nx][ny] == color:
                    visited[nx][ny] = 1
                    q.append((nx, ny))
                    a.append((nx, ny))

    return a


def down():
    arr = deque()
    for i in range(6):
        cnt = 0
        for j in range(11, -1, -1):
            if f[j][i] != '.':
                arr.append(f[j][i])
                f[j][i] = '.'

        for j in range(11, -1, -1):
            if arr:
                f[j][i] = arr.popleft()
            else:
                break


result = 0
while True:
    # 4개 있는 거 찾기, 4개 뭉쳐있는게 없으면 탈출
    visited = [[0] * 6 for _ in range(12)]

    four_flag = 0
    for i in range(12):
        for j in range(6):
            if f[i][j] != '.':
                a = bfs(i, j, visited, f[i][j])
                if len(a) >= 4:
                    # 터뜨리기
                    four_flag = 1
                    for k in range(len(a)):
                        x, y = a[k]
                        f[x][y] = '.'

    if four_flag == 0:
        break

    result += 1

    # 밑으로 내리기
    down()
    # for i in range(12):
    #     print(f[i])

print(result)
