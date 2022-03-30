import sys
read = sys.stdin.readline
sys.setrecursionlimit(100000)

def dfs() :
    if len(s) == m :
        print(' '.join(map(str, s)))
        return
    
    for i in range(n):
        s.append(num[i])
        dfs()
        s.pop()

n, m = map(int, read().split())
num = list(map(int, read().split()))
num.sort()

s = []

dfs()