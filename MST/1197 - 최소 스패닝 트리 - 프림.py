import sys
from queue import PriorityQueue

read = sys.stdin.readline

v, e = map(int, read().split())


graph = [[] for i in range(v+1)]

result = 0
q = PriorityQueue()
visited = [0] * (v+1)

def prim(start) :
    global result

    q.put([0, 1])

    while not q.empty() :
        c, b = q.get()

        if (visited[b] == 1) :
            continue

        start = b
        visited[b] = 1
        result += c

        for i in range(len(graph[start])) :
            q.put(graph[start][i])

    print(result)

for i in range(e) :
    a, b, c = map(int, read().split())
    graph[a].append([c, b])
    graph[b].append([c, a])

prim(1)