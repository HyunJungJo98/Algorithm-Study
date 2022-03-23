from collections import deque
import sys

read = sys.stdin.readline

def bfs(v) :
    global cnt
    
    q = deque()
    q.append(v)
    visit_list[v] = 1

    while q :
        v = q.popleft()
        
        for i in range(1, n+1) :
            if visit_list[i] == 0 and graph[v][i] == 1 :
                q.append(i)
                visit_list[i] = 1
                cnt = cnt + 1
                
    

#컴퓨터 수(노드 수)
n = int(read())

#연결되어 있는 컴퓨터 쌍의 수(간선 수)
m = int(read())

graph = [[0] * (n+1) for _ in range(n+1)]
visit_list = [0] * (n+1)

for _ in range(m) :
    a, b = map(int, read().split())
    graph[a][b] = graph[b][a] = 1

cnt = 0
bfs(1)
print(cnt)
