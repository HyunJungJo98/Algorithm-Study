from collections import deque
board = [[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

length = len(board)

result = []

visited = [[100000000] * length for _ in range(length)]

print(visited)

q = deque()

q.append((0, 0, -1, 0))
visited[0][0] = 0

while q:
    a, b, direction, cost = q.popleft()

    for i in range(len(dx)):
        nx, ny = a + dx[i], b + dy[i]
        if 0 <= nx < length and 0 <= ny < length and board[nx][ny] == 0:
            # 처음이거나 이전 방향과 같으면
            if (direction == -1 or direction == i):
                # 이전 cost에 100원을 더한 값이 기존 visited값보다 작은지 확인
                if cost + 100 <= visited[nx][ny]:
                    visited[nx][ny] = cost + 100
                    q.append((nx, ny, i, cost + 100))
            else:
                if cost + 600 <= visited[nx][ny]:
                    visited[nx][ny] = cost + 600
                    q.append((nx, ny, i, cost + 600))

print(visited[-1][-1])
