import sys
read = sys.stdin.readline

def find(x) :
    if(parent[x] == x) : return x
    parent[x] = find(parent[x])
    return parent[x]

def merge(node1, node2) :
    node1 = find(node1)
    node2 = find(node2)
    if node1 == node2 :
        return False
    parent[node2] = node1
    return True

n = int(read())
m = int(read())

graph = []

for i in range(m) :
    a, b, c = map(int, read().split())
    graph.append([c, a, b])

graph.sort()
parent = [i for i in range(n+1)]

result = 0

for i in range(len(graph)) :
    weight = graph[i][0]
    node1 = graph[i][1]
    node2 = graph[i][2]
    if (merge(node1, node2)) :
        result += weight

print(result)