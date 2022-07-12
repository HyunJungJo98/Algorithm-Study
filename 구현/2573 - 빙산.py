from collections import deque
import sys
read = sys.stdin.readline

h, w = map(int, read().split())
ice = []

for i in range(h):
    ice.append(list(map(int, read().split())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def two_check(x, y, visited):
    minus = [[0] * w for _ in range(h)]
    q = deque()
    q.append((x, y))
    visited[x][y] = 1
    while q:
        x, y = q.popleft()
        cnt = 0
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < h and 0 <= ny < w:
                if visited[nx][ny] == 0 and ice[nx][ny] != 0:
                    visited[nx][ny] = 1
                    q.append((nx, ny))
                if ice[nx][ny] == 0:
                    cnt += 1
        minus[x][y] = cnt
    return minus


result = 0
while True:
    # 두 덩어리인지 확인
    visited = [[0] * w for _ in range(h)]

    ice_count = 0
    minus = []
    for i in range(h):
        for j in range(w):
            if ice[i][j] != 0 and visited[i][j] == 0:
                minus = two_check(i, j, visited)
                ice_count += 1

    # 두 덩어리이면 break
    if ice_count >= 2:
        break
    # 계속 한 덩이이다가 녹았을 때
    elif ice_count == 0:
        result = 0
        break
    else:
        for i in range(h):
            for j in range(w):
                a = ice[i][j] - minus[i][j]
                if a < 0:
                    ice[i][j] = 0
                else:
                    ice[i][j] = a
        result += 1

print(result)
