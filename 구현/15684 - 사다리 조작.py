import sys
read = sys.stdin.readline

wid, n, h = map(int, read().split())

ladder = [[0] * (wid+1) for _ in range(h+1)]

for i in range(n):
    a, b = map(int, read().split())
    ladder[a][b] = 1


def game():
    # 사다리 타기
    for i in range(1, wid+1):
        x, y = 1, i
        while x <= h:
            if ladder[x][y] == 1:
                y += 1
            elif ladder[x][y-1] == 1 and 0 < y-1:
                y -= 1
            x += 1
        if y != i:
            return False
    return True


result = False


# 처음에는 visited를 사용했으나 필요 없었음
def dfs(l, cnt):
    global result
    if cnt == l:
        if game():
            result = True
        return

    for i in range(1, h+1):
        for j in range(1, wid+1):
            if ladder[i][j] == 0:
                if j+1 < wid+1 and ladder[i][j+1] != 1:
                    ladder[i][j] = 1
                    dfs(l, cnt+1)
                    if result:
                        return
                    ladder[i][j] = 0


cnt = 0
# 1개, 2개, 3개 순서대로 사다리 놓기
for i in range(4):
    dfs(i, 0)
    if result:
        cnt = i
        break

if result:
    print(cnt)
else:
    print(-1)
