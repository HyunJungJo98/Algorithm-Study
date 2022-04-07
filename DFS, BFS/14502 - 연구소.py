from collections import deque
import copy
import sys
read = sys.stdin.readline

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs() :
    global result
    c_graph = copy.deepcopy(graph)
    q = deque()
    for i in range(n) :
        for j in range(m) :
            if c_graph[i][j] == 2 :
                q.append((i, j))
    while q :
        a, b = q.popleft()
        for i in range(4) :
            na = a+dx[i]
            nb = b+dy[i]
            if na<0 or na>=n or nb<0 or nb>=m :
                continue
            if c_graph[na][nb] == 0 :
                c_graph[na][nb] = 2
                q.append((na, nb))
    cnt = 0
    for i in range(n) :
        cnt += c_graph[i].count(0)
    result = max(cnt, result)

def make_war(cnt) :
    if cnt == 3 :
        bfs()
        return
        
    for i in range(n) :
        for j in range(m) :
            if graph[i][j] == 0 :
                graph[i][j] = 1
                make_war(cnt+1)
                graph[i][j] = 0   

n, m = map(int, read().split())
graph = []
result = 0

for _ in range(n) :
    graph.append(list(map(int, read().split())))

make_war(0)
print(result)