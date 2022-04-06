import sys
read = sys.stdin.readline

s1 = read().strip()
s2 = read().strip()

graph = [[0] * (len(s2)+1) for _ in range(len(s1)+1)]

for i in range(1, len(s1)+1):
    for j in range(1, len(s2)+1) :
        if s1[i-1] == s2[j-1] :
            graph[i][j] = graph[i-1][j-1] +1
        else :
            graph[i][j] = max(graph[i-1][j], graph[i][j-1])

print(graph[-1][-1])