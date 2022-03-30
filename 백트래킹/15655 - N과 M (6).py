import sys

read = sys.stdin.readline

def dfs(start) :
    if len(s) == m :
        print(' '.join(map(str, s)))

    for i in range(start, n) :
        if num[i] not in s :
            s.append(num[i])
            dfs(i)
            s.pop()

n, m = map(int, read().split())
num = list(map(int, read().split()))
num.sort()

s = []

dfs(0)