import sys
from queue import PriorityQueue

read = sys.stdin.readline

n, e = map(int, read().split())

g = [[] for _ in range(n+1)]
d = [987654321] * (n+1)
v1_d = [987654321] * (n+1)
v2_d = [987654321] * (n+1)

for i in range(e) :
    a, b, c = list(map(int, read().strip()))
    #양방향이므로
    g[a].append([b, c])
    g[b].append([a, c])

v1, v2 = map(int, read().split())

def dijkstra(start, g, d):
    q = PriorityQueue()
    d[start] = 0
    q.put((d[start], start))

    while not q.empty() :
        w, node = q.get()
        if w > d[node] :
            continue
        for i in g[node] :
            new_node = i[0]
            new_w = i[1]
            if (w + new_w < d[new_node]) :
                d[new_node] = w + new_w
                q.put((w+new_w, new_node))

dijkstra(1, g, d)
dijkstra(v1, g, v1_d)
dijkstra(v2, g, v2_d)

# 1 -> v1 -> v2 -> n으로 가는 경우
# 1 -> v2 -> v1 -> n으로 가는 경우 중
# 제일 작은 것 선택

result = min(d[v1]+v1_d[v2]+v2_d[n], d[v2] + v2_d[v1] + v1_d[n])

if result >= 987654321 :
    print(-1)
else :
    print(result)