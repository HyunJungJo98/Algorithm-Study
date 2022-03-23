import sys

read = sys.stdin.readline

s = []

def dfs() :
    if len(s) == m :
        print(' '.join(map(str, s)))
        return

    for i in range(1, n+1) :
        if i not in s :
            s.append(i)
            dfs()
            s.pop()


n, m = map(int, read().split())

dfs()

#n만큼 반복, 각각 m개씩 받기
