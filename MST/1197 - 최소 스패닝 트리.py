import sys
read = sys.stdin.readline

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

v, e = map(int, read().split())

graph = []

for i in range(e) :
    a, b, c = map(int, read().split())
    graph.append([c, a, b])

graph.sort()
parent = [i for i in range(v+1)]

result = 0

for i in range(len(graph)) :
    weight = graph[i][0]
    node1 = graph[i][1]
    node2 = graph[i][2]
    if(merge(node1, node2)) :
        result += weight

print(result)
