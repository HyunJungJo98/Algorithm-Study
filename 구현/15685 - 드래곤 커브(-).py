import sys
read = sys.stdin.readline

n = int(read())

graph = [[0] * 101 for _ in range(101)]

# 0, 1, 2, 3 방향
dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]


def rotate(endpoint, movepoint):
    y, x = endpoint[0], endpoint[1]
    my, mx = movepoint[0], movepoint[1]
    tx, ty = (-1)*(my-y), (mx-x)
    nx, ny = tx + x, ty + y
    return (ny, nx)


def dragon_rotate(gener, start, end, arr):
    if gener == 0:
        return

    list_ = []
    list_.extend(arr)
    # 현재 있는 세대만큼 endpoint에 이어서 붙여줌
    for i in range(len(list_)):
        y, x = rotate(end, list_[i])
        if 0 <= nx <= 100 and 0 <= ny <= 100:
            graph[y][x] = 1
            list_.append([y, x])

    # endpoint 다시 구하기
    new_end = rotate(end, start)
    # 세대가 0이 될 때까지 구하기
    dragon_rotate(gener-1, start, new_end, list_)


for i in range(n):
    x, y, d, g = map(int, read().split())
    # 0세대 만들기
    graph[y][x] = 1
    nx, ny = x + dx[d], y + dy[d]
    if 0 <= nx <= 100 and 0 <= ny <= 100:
        graph[ny][nx] = 1
    dragon_rotate(g, [y, x], [ny, nx], [[y, x], [ny, nx]])

cnt = 0
for i in range(100):
    for j in range(100):
        if graph[i][j] == 1 and graph[i+1][j] == 1 and graph[i][j+1] == 1 and graph[i+1][j+1] == 1:
            cnt += 1

print(cnt)
