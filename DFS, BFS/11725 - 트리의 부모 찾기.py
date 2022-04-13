import sys
from collections import deque
read = sys.stdin.readline

n = int(read())

tree = [[] for _ in range(n+1)]
visited = [0] * (n+1)
parent = [0] * (n+1)

for i in range(n-1) :
    a, b = map(int, read().split())
    tree[a].append(b)
    tree[b].append(a)

q = deque()
q.append((1))
visited[1] = 1

while q :
    parent_node = q.popleft()
    for i in range(len(tree[parent_node])) :
        child_node = tree[parent_node][i]
        if visited[child_node] == 0 :
            q.append(child_node)
            parent[child_node] = parent_node
            visited[child_node] = 1

print('\n'.join(map(str, parent[2:])))