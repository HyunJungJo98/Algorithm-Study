import sys
from queue import PriorityQueue

read = sys.stdin.readline

q = PriorityQueue()

v, e = map(int,read().split())
k = int(read())

graph = [[] for _ in range(v+1)]
visit_list = [0] * (v+1)
d = [300000] * (v+1)

for i in range(e) :
    u, v, w = map(int, read().split())
    graph[u].append([v, w])

d[k] = 0

node = k

q.put((d[k], node))
while not q.empty() :
    node = q.get()[1]
    for i in range(len(graph[node])):
        end_node = graph[node][i][0]
        weight = graph[node][i][1]
        a = min(d[end_node], d[node] + weight)
        if(a < d[end_node]):
            d[end_node] = a
            q.put((d[end_node], end_node))

for i in range(1, len(d)) :
    if(d[i] >= 300000) :
        print("INF")
    else : print(d[i])