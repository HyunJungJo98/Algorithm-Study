import sys
read = sys.stdin.readline

s = []
for i in range(9):
    s.append(list(map(int, list(read().strip()))))


def rowCheck(x, num):
    if num in s[x]:
        return False
    return True


def colCheck(y, num):
    for i in range(9):
        if s[i][y] == num:
            return False
    return True


def squareCheck(x, y, num):
    xstart = x//3 * 3
    ystart = y//3 * 3
    for i in range(xstart, xstart + 3):
        for j in range(ystart, ystart + 3):
            if s[i][j] == num:
                return False
    return True


def dfs(depth):
    if depth == cnt:
        for i in range(9):
            for j in range(9):
                print(s[i][j], end='')
            print()
        exit()

    x, y = zero[depth]
    for j in range(1, 10):
        if rowCheck(x, j) and colCheck(y, j) and squareCheck(x, y, j):
            s[x][y] = j
            dfs(depth+1)
            s[x][y] = 0


zero = []
cnt = 0
for i in range(9):
    for j in range(9):
        if s[i][j] == 0:
            zero.append((i, j))
            cnt += 1

dfs(0)
