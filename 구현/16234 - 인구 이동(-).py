from collections import deque
import sys
read = sys.stdin.readline

n, l, r = map(int, read().split())

con = []
for i in range(n):
    con.append(list(map(int, read().split())))

answer = 0

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def process(i, j, index):
    # 연합된 국가를 담을 리스트
    united = []
    # 일단 자기 자신 포함
    united.append((i, j))

    # 연합 국가를 찾을 q
    q = deque()
    q.append((i, j))
    # visited를 index로 초기화
    union[i][j] = index
    # 평균을 구하기 위한 인구 합
    summary = con[i][j]
    # 평균을 구하기 위한 연합국 개수
    cnt = 1

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 방문한 적 없으면
            if 0 <= nx < n and 0 <= ny < n and union[nx][ny] == -1:
                # 범위 안이면
                if l <= abs(con[nx][ny] - con[x][y]) <= r:
                    # visited 바꿔주기
                    union[nx][ny] = index
                    summary += con[nx][ny]
                    cnt += 1
                    # q에도 추가, 연합국 리스트에도 추가
                    q.append((nx, ny))
                    united.append((nx, ny))

    # 연합국 인구 수를 바꿔줌
    for i, j in united:
        con[i][j] = summary // cnt

    # print(con, index)
    # print(union)


answer = 0
while True:
    # visited
    union = [[-1] * n for _ in range(n)]
    index = 0
    for i in range(n):
        for j in range(n):
            # 방문한 적 없으면 시작, process에서 연합국들은 index로 바꿔줌
            # 따라서 연합국이 하나라도 있다면 index는 n*n이 될 수 없음
            if union[i][j] == -1:
                process(i, j, index)
                # 인구통합 한 번 할 때마다 index 1 증가
                index += 1

    # 더이상 인구이동이 없다면 index가 끝까지 돌았을 것
    if index == n*n:
        break

    answer += 1

print(answer)
