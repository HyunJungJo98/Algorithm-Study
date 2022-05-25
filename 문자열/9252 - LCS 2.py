import sys
read = sys.stdin.readline

s1 = read().strip()
s2 = read().strip()

graph = [[0] * (len(s1)+1) for _ in range(len(s2)+1)]

for i in range(len(s2)):
    for j in range(len(s1)):
        if s2[i] == s1[j]:
            graph[i+1][j+1] = graph[i][j] + 1
        else:
            graph[i+1][j+1] = max(graph[i][j+1], graph[i+1][j])

if graph[-1][-1] == 0:
    print(graph[-1][-1])
    exit()

i, j = -1, -1
cur = graph[-1][-1]
result = ''

while cur != 0:
    if graph[i][j-1] == graph[i][j]:
        j -= 1
        continue
    elif graph[i-1][j] == graph[i][j]:
        i -= 1
        continue
    elif graph[i-1][j-1] + 1 == graph[i][j]:
        result = s2[i] + result
        cur -= 1
        i -= 1
        j -= 1

print(graph[-1][-1])
print(result)


i, j = -1, -1
result = ''

# cur를 두지 않고 i, j로만 조건으로 하면 시간초과

# while i > -len(s2) or j > -len(s1):
#     if graph[i][j-1] == graph[i][j]:
#         if j-1 > -len(s1):
#             j -= 1
#         continue
#     elif graph[i-1][j] == graph[i][j]:
#         if i-1 > -len(s2):
#             i -= 1
#         continue
#     elif graph[i-1][j-1] + 1 == graph[i][j]:
#         result = s2[i] + result
#         i -= 1
#         j -= 1
