import sys

read = sys.stdin.readline

def dfs() :
    if len(s) == m :
        print(' '.join(map(str, s)))
        return

    for i in range(n) :
        if num[i] not in s :
            s.append(num[i])
            dfs()
            s.pop()

n, m = map(int, read().split())

num = list(map(int, read().split()))
num.sort()

s = []

dfs()