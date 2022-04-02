import sys
read = sys.stdin.readline

def dfs(x, y) :
    print('check :', check)
    if x==n-1 and y==n-1 :
        return 1
    
    if check[x][y] != -1 :
        return check[x][y]

    check[x][y] = 0
    if 0<x+a[x][y]<n:
        check[x][y] += dfs(x+a[x][y], y)
    if 0<y+a[x][y]<n:
        check[x][y] += dfs(x, y+a[x][y])
    return check[x][y]

n = int(read())
a = []
cnt = 0

for i in range(n) :
    a.append(list(map(int, read().split())))

check = [[-1]*n for _ in range(n)]


print(dfs(0, 0))