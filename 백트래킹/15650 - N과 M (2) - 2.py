import sys
read = sys.stdin.readline

n, m = map(int, read().split())

a = []

def dfs(start) :
    if (len(a) == m) :
        print(' '.join(map(str, a)))
        return
    for i in range(start, n+1) :
        a.append(i)
        dfs(i+1)
        a.pop()
dfs(1)