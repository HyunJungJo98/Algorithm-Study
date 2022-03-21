import imp
import sys
read = sys.stdin.readline
sys.setrecursionlimit(100000)

import itertools
'''
n, m = map(int, read().split())
card = list(map(int, read().split()))
c = []
d = []

max = 0
for i in range(n) :
    for j in range(i+1, n) :
        for k in range(j+1, n) :
            if max < card[i] + card[j] + card[k] <= m :
                max = card[i] + card[j] + card[k]


print(max)
'''
'''
n, m = map(int, read().split())
card = list(map(int, read().split()))
nCr = list(itertools.combinations(card, 3))
max_num = 0
for i in nCr:
    if sum(i) <= n:
        max_num = max(max_num, sum(i))
'''


def dfs(start) :
    global max
    if len(c) == 3 and max < sum(c) <= m:
        max = sum(c)
        return
    for i in range(start, n) :
        c.append(card[i])
        dfs(i+1)
        c.pop()

n, m = map(int, read().split())
card = list(map(int, read().split()))

c = []
max = 0
dfs(0)

print(max)