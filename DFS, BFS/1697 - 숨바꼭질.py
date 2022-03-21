from collections import deque
import sys

read = sys.stdin.readline

def bfs(v) :
    
    q = deque()
    q.append(v)

    while q :
        v = q.popleft()
        dx = [v+1, v-1, v*2]
        if v == k :
            print(visit_list[v])
            break
        for i in range(len(dx)) :
            nx = dx[i]
            if v-1<= nx <k+1 and visit_list[nx] == 0:
                visit_list[nx] = visit_list[v] + 1
                q.append(nx)
            

n, k = map(int, read().split())

graph = [0] * (k+1)
visit_list = [0] * (k+1)

bfs(5)
