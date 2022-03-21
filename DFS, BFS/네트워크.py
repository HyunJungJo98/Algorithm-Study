import sys

n=3
computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
visited = [0] * n

def dfs(start) :
    print(start)
    visited[start] = 1
    for i in range(n) :
        if visited[i] == 0 and computers[start][i] == 1 :
            dfs(i)
cnt = 0

for i in range(n) :
    for j in range(n) :
        if visited[i] == 0 :
            dfs(i)
            cnt += 1

print(cnt)