import sys
from collections import deque
read = sys.stdin.readline


def rev(num, visited):
    left = t[num][2]
    right = t[num][6]
    visited[num] = 1

    if num + 1 < 4 and t[num+1][6] != left and visited[num+1] == 0:
        strait(num+1, visited)
    if num - 1 >= 0 and t[num-1][2] != right and visited[num-1] == 0:
        strait(num-1, visited)
    t[num].rotate(-1)


def strait(num, visited):
    left = t[num][2]
    right = t[num][6]
    visited[num] = 1

    if num + 1 < 4 and t[num+1][6] != left and visited[num+1] == 0:
        rev(num+1, visited)
    if num - 1 >= 0 and t[num-1][2] != right and visited[num-1] == 0:
        rev(num-1, visited)
    t[num].rotate(1)


t = []
for i in range(4):
    b = deque(list(map(int, read().strip())))
    t.append(b)

k = int(read())
for i in range(k):
    num, d = map(int, read().split())
    visited = [0] * 4
    if d == -1:
        rev(num-1, visited)
    else:
        strait(num-1, visited)

cnt = 0
for i in range(4):
    if t[i][0] == 1:
        cnt += 2**i

print(cnt)
