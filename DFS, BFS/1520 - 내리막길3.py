from collections import deque
import sys
sys.setrecursionlimit(100000)

read = sys.stdin.readline

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def dfs(x, y):
    
    if x == m-1 and y == n-1 :
        return 1
    if check[x][y] != 0 :
        return visited[x][y]

    check[x][y] = 1

    for i in range(len(dx)) :
        nx, ny = x + dx[i], y + dy[i]
        if 0<=nx<m and 0<=ny<n :
            if graph[nx][ny] < graph[x][y] :
                visited[x][y] = visited[x][y] + dfs(nx, ny)
    return visited[x][y]


m, n = map(int, read().split())

graph = []

for _ in range(m) :
    graph.append(list(map(int, read().split())))

#dp
visited = [[0] * n for _ in range(m)]
#방문했는지 체크해주는 리스트
#visited를 0으로 초기화할 거면 필요함
#한 루트에서 방문한 곳은 다시 방문하면 안 되므로
check = [[0] * n for _ in range(m)]

print(dfs(0, 0))