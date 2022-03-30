import sys
read = sys.stdin.readline
sys.setrecursionlimit(100000)

def dfs() :
    if len(s) == m :
        result.append(tuple(s))
        return
    
    for i in range(n) :
        if not visited[i] :
            s.append(num[i])
            visited[i] = True
            dfs()
            s.pop()
            visited[i] = False


n, m = map(int, read().split())
num = list(map(int, read().split()))
num.sort()

result = []
s = []
visited = [False] * n

dfs()

result = sorted(list(set(result)))

for i in result :
    print(' '.join(map(str, i)))