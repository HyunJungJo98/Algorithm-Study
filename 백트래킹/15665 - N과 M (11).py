import sys
read = sys.stdin.readline

def dfs() :
    if len(s) == m :
        result.append(tuple(s))
        return
    
    for i in range(n) :
        s.append(num[i])
        dfs()
        s.pop()

n, m = map(int, read().split())
num = list(map(int, read().split()))
num.sort()

s = []
result = []

dfs()

result = sorted(set(result))

for i in result :
    print(' '.join(map(str, i)))