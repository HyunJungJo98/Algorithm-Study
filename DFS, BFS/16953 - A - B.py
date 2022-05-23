from collections import deque
import sys
read = sys.stdin.readline

a, b = map(int, read().split())

q = deque()

q.append((a, 0))

result = -1

while q :
    num, depth = q.popleft()
    if num == b :
        result = depth + 1
        break
    
    if num < b :
        q.append((num*2, depth+1))
        q.append((int(str(num)+'1'), depth+1))

print(result)