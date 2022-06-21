import sys
from collections import deque
read = sys.stdin.readline

n, m = map(int, read().split())
graph = [[]for _ in range(n+1)]

for i in range(m):
    a, b = map(int, read().split())
    graph[a].append(b)
    graph[b].append(a)


def dfs(cur, find):
    visited = [0] * (n+1)
    q = deque()
    q.append((cur, 0))

    while q:
        node, depth = q.popleft()
        #print('node: ', node, 'depth: ', depth)
        if node == find:
            break
        for i in range(len(graph[node])):
            if visited[graph[node][i]] == 0:
                q.append((graph[node][i], depth+1))
                visited[graph[node][i]] = depth + 1
    return depth


result = 9876543210
answer = 0
for i in range(1, n+1):
    cur = i
    cnt = 0
    for j in range(1, n+1):
        if j == i:
            continue
        cnt += dfs(cur, j)
    if result > cnt:
        result = cnt
        answer = cur

print(answer)
