import sys
read = sys.stdin.readline


def check(correct):
    result = 0

    # 대각선 확인
    arr = [correct[0][0], correct[1][1], correct[2]
           [2], correct[3][3], correct[4][4]]
    if 0 not in arr:
        result += 1
    arr = [correct[0][4], correct[1][3], correct[2]
           [2], correct[3][1], correct[4][0]]
    if 0 not in arr:
        result += 1

    # 가로 확인
    for i in range(5):
        if 0 not in correct[i]:
            result += 1

    # 세로 확인
    rotate = correct.copy()
    rotate = list(zip(*rotate[::-1]))
    for i in range(5):
        if 0 not in rotate[i]:
            result += 1
    return result


bingo = {}
for i in range(5):
    a = list(map(int, read().split()))
    for j in range(5):
        bingo[a[j]] = [i, j]

call = []
for i in range(5):
    call.append(list(map(int, read().split())))

correct = [[0] * 5 for _ in range(5)]
cnt = 0
for i in range(5):
    for j in range(5):
        y, x = bingo[call[i][j]]
        correct[y][x] = 1
        cnt += 1
        if cnt >= 12:
            if check(correct) > 2:
                print(cnt)
                exit()
