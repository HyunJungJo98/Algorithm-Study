from collections import deque
import sys
read = sys.stdin.readline

dx = [-2, -1, 1, 2, -2, -1, 1, 2]
dy = [1, 2, 2, 1, -1, -2, -2, -1]

'''
cnt를 쓰면 모든 경우의 수가 다 세어지므로 쓰면 안 됨
DP인듯?
'''

def bfs(l, s_x, s_y, e_x, e_y) :
    cnt = 0
    q = deque()
    q.append((s_x, s_y))

    while q:
        x, y = q.popleft()
        if x == e_x and y == e_y:
            return graph[e_x][e_y] - 1
        for i in range(len(dx)) :
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<l and 0<=ny<l and graph[nx][ny] == 0:
                q.append((nx, ny))
                #그 전 걸 더해서 이동한 횟수 구하기
                graph[nx][ny] = graph[x][y] +1
    

t = int(read())
result = []

for i in range(t) :
    l = int(read())
    graph = [[0] * l for _ in range(l)]
    s_x, s_y =  map(int, read().split())
    e_x, e_y =  map(int, read().split())
    graph[s_x][s_y] = 1

    result.append(bfs(l, s_x, s_y, e_x, e_y))

print('\n'.join(map(str, result)))