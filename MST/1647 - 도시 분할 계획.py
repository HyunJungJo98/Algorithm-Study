import sys
read = sys.stdin.readline

n, m = map(int, read().split())

def find(x) :
    if(parent[x] == x) : return x
    parent[x] = find(parent[x])
    return parent[x]

def merge(x, y):
    x = find(x)
    y = find(y)
    if(x == y) :
        return False
    parent[y] = x
    return True

graph = []

for i in range(m) :
    a, b, c = map(int, read().split())
    graph.append([c, a, b])

graph.sort()
parent = [i for i in range(n+1)]

w = []

for i in range(len(graph)) :
    weight = graph[i][0]
    node1 = graph[i][1]
    node2 = graph[i][2]
    if(merge(node1, node2)) :
        w.append(weight)

print(sum(w)-w[len(w)-1])