import sys
from collections import deque
read = sys.stdin.readline

n = int(read())
human1, human2 = map(int, read().split())
m = int(read())
family = [[] for _ in range(n+1)]
for i in range(m) :
    a, b = map(int, read().split())
    family[a].append(b)
    family[b].append(a)

visited = [0 for _ in range(n+1)]

q = deque()
q.append((human1, 0))

result = -1

while q :
    node, depth = q.popleft()
    if node == human2:
        result = depth
        break
    visited[node] = 1
    for i in range(len(family[node])) :
        n_node = family[node][i]
        if visited[n_node] == 0 :
            q.append((n_node, depth+1))
            visited[n_node] = 1

print(result)