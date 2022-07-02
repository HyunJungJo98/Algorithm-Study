import sys
read = sys.stdin.readline

n = int(read())
num = int(read())

arr = [[0] * n for _ in range(n)]
x = n//2
y = n//2

# 상, 우, 하, 좌
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

arr[x][y] = 1
cnt = 2
mul = 1
direct = 0
result = True
answer = [0, 0]
if num == 1:
    answer = [x, y]
while cnt < n*n:
    for i in range(2):
        for j in range(mul):
            x += dx[direct]
            y += dy[direct]
            arr[x][y] = cnt
            if cnt == num:
                answer[0] = x
                answer[1] = y
            cnt += 1
            if cnt > n*n:
                result = False
                break
        if not result:
            break
        direct = (direct + 1) % 4
    mul += 1

for i in range(n):
    print(*arr[i])
print(answer[0]+1, answer[1]+1)
