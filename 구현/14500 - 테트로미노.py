import sys
read = sys.stdin.readline

def dfs(r, c, idx, num) :
    global result

    if result >= num + max_num * (3-idx):
        return
    
    if idx == 3 :
        result = max(result, num)
        return

    for i in range(4) :
        nr = r + dr[i]
        nc = c + dc[i]
        if 0 <= nr < n and 0 <= nc < m and visited[nr][nc] == 0 :
            if idx == 1 :
                visited[nr][nc] = 1
                dfs(nr, nc, idx+1, num + paper[nr][nc])
                visited[nr][nc] = 0
            visited[nr][nc] = 1
            dfs(nr, nc, idx+1, num + paper[nr][nc])
            visited[nr][nc] = 0

n, m = map(int, read().split())
paper = [list(map(int, input().split())) for _ in range(n)]
visited = [[0]*m for _ in range(n)]

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

result = 0
max_num = max(map(max, paper))

for i in range(n) :
    for j in range(m) :
        visited[i][j] = 1
        dfs(i, j, 0, paper[i][j])
        visited[i][j] = 0

print(result)