import sys
read = sys.stdin.readline

s1 = read().strip()
s2 = read().strip()
s3 = read().strip()

graph = [[[0] * (len(s1)+1) for _ in range(len(s2)+1)]
         for _ in range(len(s3)+1)]

for i in range(len(s3)):
    for j in range(len(s2)):
        for k in range(len(s1)):
            if s1[k] == s2[j] == s3[i]:
                graph[i+1][j+1][k+1] = graph[i][j][k] + 1
            else:
                graph[i+1][j+1][k+1] = max(graph[i][j+1][k+1], graph[i+1][j][k+1], graph[i+1]
                                           [j+1][k], graph[i][j][k+1], graph[i][j+1][k], graph[i+1][j][k])

print(graph[-1][-1][-1])
