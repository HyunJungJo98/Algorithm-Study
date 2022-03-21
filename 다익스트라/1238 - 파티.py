import sys
from queue import PriorityQueue

read = sys.stdin.readline

n, m, x = map(int, read().split())

road = [[] for _ in range(n+1)]
r_road = [[] for _ in range(n+1)]
d = [987654321] * (n+1)
r_d = [987654321] * (n+1)

for i in range(m) :
    u, v, w = map(int, read().split())
    road[u].append([v, w])
    r_road[v].append([u, w])

q = PriorityQueue()

def dijkstra(x, d, road) :
    d[x] = 0
    q.put((d[x], x))

    while not q.empty() :
        w, node = q.get()
        print(w, node)
        if w > d[node] :
            continue
        for i in road[node] : 
            new_node = i[0]
            new_w = i[1]
            if (w + new_w < d[new_node]) :
                d[new_node] = w + new_w
                q.put((w + new_w, new_node))


dijkstra(x, d, road)
dijkstra(x, r_d, r_road)

max_length = 0
for i in range(1, len(d)) :
    max_length = max(max_length, d[i] + r_d[i])
print(max_length)