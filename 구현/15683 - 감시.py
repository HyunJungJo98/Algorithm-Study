import sys
import copy
read = sys.stdin.readline
# 동 서 남 북
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
direction = [[], [[0], [1], [2], [3]], [[0, 1], [2, 3]], [[0, 2], [2, 1], [1, 3], [3, 0]],
             [[3, 0, 2], [1, 3, 0], [0, 2, 1], [2, 1, 3]], [[0, 1, 2, 3]]]


def watch(y, x, direction, tmp):
    # d는 0, 1 / 2, 3
    for d in direction:
        # 방향이 여러 개면 x, y를 초기화해줘야 하므로
        nx = x
        ny = y
        while True:
            nx += dx[d]
            ny += dy[d]
            # 범위를 벗어나거나 6을 만날 때까지 #으로 만듦
            if 0 <= nx < m and 0 <= ny < n and tmp[ny][nx] != 6:
                if tmp[ny][nx] == 0:
                    tmp[ny][nx] = '#'
            # 범위를 벗어나거나 6을 만나면 탈출
            else:
                break

# 배열을 통째로 백트랙킹


def dfs(office, cnt):
    global answer
    tmp = copy.deepcopy(office)
    if cnt == cctv_cnt:
        c = 0
        for i in tmp:
            c += i.count(0)
        answer = min(answer, c)
        return
    y, x, cctv = q[cnt]
    for i in direction[cctv]:
        # i : 리스트 안의 리스트들
        # [0, 1], [2, 3] 각각 하나씩 적용 한 후 그 배열을 다시 dfs
        watch(y, x, i, tmp)
        dfs(tmp, cnt + 1)
        # 원래대로 복구할 땐 인자로 받아왔던 걸 그대로 copy
        tmp = copy.deepcopy(office)


n, m = map(int, read().split())
off = []
cctv_cnt = 0
q = []
answer = 9876543210000
for i in range(n):
    a = list(map(int, read().split()))
    off.append(a)
    for j in range(len(a)):
        if 0 < a[j] < 6:
            cctv_cnt += 1
            q.append([i, j, a[j]])

dfs(off, 0)
print(answer)
