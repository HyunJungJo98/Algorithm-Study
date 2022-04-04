import sys
from collections import deque
read = sys.stdin.readline


t = int(read())
result = []
answer = []

for i in range(t) :
    n, m = map(int, read().split())
    li = list(map(int, read().split()))
    q = deque()
    for i in range(n) :
        q.append((i, li[i]))
    num = q[m]

    cnt = 0
    li.sort()
    max_num = li[-1]
    while True :
        idx, current = q.popleft()
        if current < max_num :
            q.append((idx, current))
        else : 
            result.append([idx, current])
            li.pop()
            if len(li) == 0 or idx == m:
                break
            max_num = li[-1]
    answer.append(len(result))
    result = []
        
print('\n'.join(map(str, answer)))