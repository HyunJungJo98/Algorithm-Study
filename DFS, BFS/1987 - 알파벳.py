from collections import deque
import sys

read = sys.stdin.readline

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs():
    cnt = 1

    while q :
        x, y, visited = q.pop()

        for i in range(len(dx)):
            nx, ny = x+dx[i], y+dy[i]
            if 0<=nx<r and 0<=ny<c :
                if (graph[nx][ny] not in visited) :
                    #n_visited로 새로 만들기, visited에 계속 붙이면 안 됨
                    n_visited = visited + graph[nx][ny]
                    q.add((nx, ny, n_visited))
                    cnt = max(cnt, len(n_visited))

    return cnt


r, c = map(int, read().split())

graph = []

for i in range(r):
    graph.append(list(read().strip()))

visited = graph[0][0]
q = set()
q.add((0, 0, visited))
print(bfs())