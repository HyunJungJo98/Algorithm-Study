from collections import deque
import sys
sys.setrecursionlimit(100000)

read = sys.stdin.readline

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

def bfs(m, x, y) :
    q = deque()
    q.append((x, y))

    while q :
        x, y = q.popleft()

        for i in range(len(dx)) :
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<n and 0<=ny<n :
                if graph[nx][ny] > m and visit_list[nx][ny] == 0 :
                    q.append((nx, ny))
                    visit_list[nx][ny] = 1


def dfs(m, x, y) :
    

    for i in range(len(dx)) :
        nx, ny = x+dx[i], y+dy[i]
        if 0<=nx<n and 0<=ny<n :
            if visit_list[nx][ny] == 0 and graph[nx][ny] > m :
                visit_list[nx][ny] = 1
                dfs(m, nx, ny)
    

n = int(read())

graph = []

for i in range(n) :
    graph.append(list(map(int, read().split())))

result = 1
#최댓값, 최솟값 구한 걸 범위에 넣기
#아무 지역도 물에 잠기지 않을 때 0으로 나와야 하는데 1~10까지 하면 무조건 1은 나오기 때문
for i in range(min(map(min, graph)), max(map(max, graph))+1) :
    visit_list = [[0] * n for _ in range(n)]
    cnt = 0
    for j in range(n) :
        for k in range(n) :
            if visit_list[j][k] == 0 and graph[j][k] > i :
                cnt = cnt + 1
                visit_list[j][k] = 1
                #bfs(i, j, k)
                dfs(i, j, k)
    result = max(result, cnt)

print(result)