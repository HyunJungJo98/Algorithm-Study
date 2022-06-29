import sys
from collections import deque
read = sys.stdin.readline

n = int(read())
card = deque([i for i in range(1, n+1)])

cnt = 0
while len(card) != 1:
    if cnt % 2 == 0:
        print(card.popleft())
    else:
        card.rotate(-1)
    cnt += 1

print(card.pop())
