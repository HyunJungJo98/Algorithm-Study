import sys
read = sys.stdin.readline

s1 = read().strip()
s2 = read().strip()

graph = [[0] * (len(s2)+1) for _ in range(len(s1)+1)]

for i in range(len(s1)):
    for j in range(len(s2)):
        if s1[i] == s2[j]:
            graph[i+1][j+1] = graph[i][j]+1
        else:
            graph[i+1][j+1] = max(graph[i+1][j], graph[i][j+1])

print(graph[-1][-1])
