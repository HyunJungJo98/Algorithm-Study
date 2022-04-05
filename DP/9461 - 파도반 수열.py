import sys
read = sys.stdin.readline

t = int(read())
p = [1, 1, 1, 2, 2]

result = []
for i in range(t):
    n = int(read())
    for j in range(5, n):
        p.append(p[-1] + p[-5])
    result.append(p[n-1])

print('\n'.join(map(str, result)))
