from collections import deque
import sys
read = sys.stdin.readline

n, k = map(int, read().split())
# visited를 0으로 초기화하면 시간초과
visited = [-1]*100001

if n > k :
    print(n-k)
    exit()

q = deque()

q.append(n)
visited[n] = 0

while q : 
    x = q.popleft()
    #print(x)
    if x == k :
        print(visited[x])
        break
    if 0 <= x-1 < 100001 and visited[x-1] == -1:
        q.append(x-1)
        visited[x-1] = visited[x] + 1
    if 0 <= x*2 < 100001 and visited[x*2] == -1:
        q.append(x*2)
        visited[x*2] = visited[x]
    if 0 <= x+1 < 100001 and visited[x+1] == -1:
        q.append(x+1)
        visited[x+1] = visited[x] + 1