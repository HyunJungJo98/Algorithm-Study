import sys
from queue import PriorityQueue

read = sys.stdin.readline

n = int(read())
m = int(read())

q = PriorityQueue()

graph = [[] for _ in range(n+1)]
#최소 1억은 되어야 한다고 함
d = [987654321] * (n+1)

for i in range(m) :
    u, v, w = map(int, read().split())
    graph[u].append([v, w])

s, e = map(int, read().split())

d[s] = 0

q.put((d[s], s))
while not q.empty() :
    w, node = q.get()
    #안 해주면 시간초과 남
    if d[node] < w :
        continue
    for i in range(len(graph[node])) :
        new_node = graph[node][i][0]
        weight = graph[node][i][1]
        new_weight = w + weight
        if (new_weight < d[new_node]) :
            d[new_node] = new_weight
            q.put((new_weight, new_node))

print(d[e])