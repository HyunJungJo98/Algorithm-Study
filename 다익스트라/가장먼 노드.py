from queue import PriorityQueue

n = 6
vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]

graph = [[] for _ in range(n+1)]

d = [123456789] * (n+1)

for i in range(len(vertex)):
    node1 = vertex[i][0]
    node2 = vertex[i][1]
    graph[node1].append([node2, 1])
    graph[node2].append([node1, 1])

print(graph)

q = PriorityQueue()

q.put((0, 1))
d[1] = 0

while not q.empty():
    w, node = q.get()

    if w > d[node]:
        continue

    # node와 연결된 노드 방문
    for i in range(len(graph[node])):
        new_node = graph[node][i][0]
        new_w = graph[node][i][1]
        if w + new_w < d[new_node]:
            d[new_node] = w + new_w
            q.put((d[new_node], new_node))

max_cnt = 0
for i in range(len(d)):
    if d[i] == 123456789:
        continue
    if max_cnt < d[i]:
        max_cnt = d[i]

print(d.count(max_cnt))
