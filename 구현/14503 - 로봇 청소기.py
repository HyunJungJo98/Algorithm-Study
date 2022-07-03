import sys
read = sys.stdin.readline

n, m = map(int, read().split())
r, c, d = map(int, read().split())

graph = []

for i in range(n):
    graph.append(list(map(int, read().split())))

visited = [[0] * m for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

visited[r][c] = 1
result = 1

cur = [r, c]
print(cur)
while True:
    x, y = cur
    cnt = 0
    for _ in range(4):
        d = (d-1) % 4
        nx = x + dx[d]
        ny = y + dy[d]
        print(d, nx, ny)
        cnt += 1
        # 청소 안 하고 방문하지 않았으면 청소하고 현재 위치 바꿈
        if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 0 and visited[nx][ny] == 0:
            cur = [nx, ny]
            result += 1
            visited[nx][ny] = 1
            break
    # 청소할 곳이 없을 때
    if cnt == 4:
        # 뒤 확인
        nx = x - dx[d]
        ny = y - dy[d]
        # 뒤가 1이면 종료(탈출)
        if graph[nx][ny] == 1:
            print(result)
            break
        # 뒤가 0이면 뒤로 후진, 현재 위치 바꿈
        else:
            cur = [nx, ny]
    print(cur)
