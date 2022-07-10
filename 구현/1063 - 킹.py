import sys
read = sys.stdin.readline

king, stone, n = read().split()
n = int(n)

# R, L, B, T
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

dic = {'R': [0], 'L': [1], 'B': [2], 'T': [3], 'RT': [
    0, 3], 'LT': [1, 3], 'RB': [0, 2], 'LB': [1, 2]}

board = [[0] * 8 for _ in range(8)]

king_x = ord(king[0])-65
king_y = 8-int(king[1])
stone_x = ord(stone[0])-65
stone_y = 8-int(stone[1])

board[king_y][king_x] = 'K'
board[stone_y][stone_x] = 'S'

for i in range(n):
    m = read().strip()
    direction = dic[m]
    x, y = 0, 0
    for j in range(len(direction)):
        x += dx[direction[j]]
        y += dy[direction[j]]

    nx = king_x + x
    ny = king_y + y

    if 0 <= nx < 8 and 0 <= ny < 8:
        if board[ny][nx] != 'S':
            board[king_y][king_x] = 0
            board[ny][nx] = 'K'
            king_x, king_y = nx, ny
        else:
            nxs, nys = stone_x + x, stone_y + y
            if 0 <= nxs < 8 and 0 <= nys < 8:
                board[nys][nxs] = 'S'
                board[ny][nx] = 'K'
                board[king_y][king_x] = 0
                king_x, king_y = nx, ny
                stone_x, stone_y = nxs, nys

king_y = 8 - king_y
king_x = chr(king_x+65)
stone_y = 8 - stone_y
stone_x = chr(stone_x+65)

stone = stone_x+str(stone_y)
king = king_x+str(king_y)
print(king)
print(stone)
