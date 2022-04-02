import sys
read = sys.stdin.readline

n, m = map(int, read().split())
r, c, d = map(int, read().split())

graph = []

for i in range(n) :
    graph.append(list(map(int, read().split())))

visited = [[0] * m for _ in range(n)]

cnt = 1
graph[r][c] = 1
non_cnt = 0

# 전진용
dr = [0, -1, 0, 1]
dc = [-1, 0, 1, 0]

# 후진용
bc = [0, 1, 0, -1]
br = [1, 0, -1, 0]

while True :
    print(r, c)
    if non_cnt == 4 :
        # 한 칸 후진
        non_cnt = 0

        new_r = r+br[d]
        new_c = c+bc[d]
        
        if 0<=new_r<n and 0<=new_c<m and graph[new_r][new_c] == 0 :
            r = new_r
            c = new_c
            continue
        else :
            break
        
    new_r = r+dr[d]
    new_c = c+dc[d]
    print('new:',new_r, new_c)
    if 0<=new_r<n and 0<=new_c<m and graph[new_r][new_c] == 0 and visited[new_r][new_c] == 0 :
        r = new_r
        c = new_c
        cnt += 1
        visited[r][c] = 1
        non_cnt = 0
    else :
        non_cnt += 1
    d = (d+3)%4

print(cnt)