import sys
read = sys.stdin.readline

n = int(read())

a = []

for i in range(n):
    x, y = map(int, read().split())
    a.append([x, y])

a.sort(key=lambda x: [x[0], x[1]])

for i in range(n):
    print(a[i][0], a[i][1])
