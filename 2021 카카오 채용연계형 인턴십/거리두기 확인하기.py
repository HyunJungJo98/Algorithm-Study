from collections import deque


places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP",
                                                                                                         "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def find(graph, a, b):
    visited = [[0]*5 for _ in range(5)]
    q = deque()
    # y좌표, x좌표, 거리(깊이)
    q.append((a, b, 0))
    visited[a][b] = 1
    while q:
        x, y, dist = q.popleft()
        # X일 때 넣지 않았으므로 graph[x][y]는 P 또는 O
        # 안 되는 경우 :
        # 1. P -> O -> P
        # 2. P -> P
        # X를 만난 적 없는데 P를 만나면 어쨌든 안 됨
        if 0 < dist < 3 and graph[x][y] == 'P':
            return False
        # 2 이상 떨어진 좌표는 볼 필요 없으므로 break
        if dist > 2:
            break
        for i in range(4):
            nx, ny, nd = x+dx[i], y+dy[i], dist + 1
            if 0 <= nx < 5 and 0 <= ny < 5:
                # X이면 확인하지 않음
                if graph[nx][ny] != 'X' and visited[nx][ny] == 0:
                    q.append((nx, ny, nd))
                    visited[nx][ny] = 1
    return True


answer = []
for i in range(len(places)):
    result = 1
    for j in range(5):
        for k in range(5):
            # P 찾아서 bfs 돌리기
            if places[i][j][k] == 'P':
                if not find(places[i], j, k):
                    result = 0
                    break
        if result == 0:
            break
    answer.append(result)

print(answer)
