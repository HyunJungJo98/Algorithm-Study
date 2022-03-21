import sys
read = sys.stdin.readline

def dfs(start) :
    if len(s) == m :
        result.append(tuple(s))
        return

    for i in range(start, n) :
        s.append(num[i])
        dfs(i)
        s.pop()

n, m = map(int, read().split())
num = list(map(int, read().split()))
num.sort()

s = []
result = []

dfs(0)

result = sorted(set(result))

for i in result :
    print(' '.join(map(str, i)))