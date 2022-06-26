from collections import deque
import sys
read = sys.stdin.readline

n = int(read())
k = int(read())

apple = [[0] * (n+1) for _ in range(n+1)]
for i in range(k):
    a, b = map(int, read().split())
    apple[a][b] = 1

l = int(read())
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
d = 0
q = deque()
q.append((1, 1))
result = True
answer = 0
prev_seconde = 0
for i in range(l):
    second, c = read().split()
    second = int(second)
    second -= prev_seconde
    #print('second:', second, prev_seconde)
    idx = 0
    while idx != second and result:
        x, y = q.popleft()
        #print('popleft후:', q)
        nx = x + dx[d]
        ny = y + dy[d]

        if nx < 1 or nx > n or ny < 1 or ny > n:
            #print("범위 초과")
            result = False
            break

        # if apple[ny][nx] == 1:
        #     #print("사과있음", ny, nx)
        #     q.appendleft((x, y))
        # else:
        q.appendleft((x, y))

        #print('nx, ny : ', nx, ny)
        if (nx, ny) in q:
            #print("몸에 닿음")
            result = False
            break
        else:
            if apple[ny][nx] == 0:
                q.pop()
            else:
                apple[ny][nx] = 0
            q.appendleft((nx, ny))

        idx += 1
        answer += 1
        # print(q)
    if c == 'L':
        d = abs(d-1) % 4
    else:
        d = (d+1) % 4
    prev_seconde += second

# print(result)

while result:
    x, y = q.popleft()
    nx = x + dx[d]
    ny = y + dy[d]
    if nx < 1 or nx > n or ny < 1 or ny > n:
        break
    q.appendleft((x, y))
    if (nx, ny) in q:
        #print("몸에 닿음")
        result = False
        break
    else:
        if apple[ny][nx] == 0:
            q.pop()
        q.appendleft((nx, ny))
    answer += 1

print(answer+1)
