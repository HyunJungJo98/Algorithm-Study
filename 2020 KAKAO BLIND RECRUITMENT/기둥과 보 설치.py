n = 5
build_frame = [[0, 0, 0, 1], [2, 0, 0, 1], [4, 0, 0, 1], [0, 1, 1, 1], [
    1, 1, 1, 1], [2, 1, 1, 1], [3, 1, 1, 1], [2, 0, 0, 0], [1, 1, 1, 0], [2, 2, 0, 1]]

graph = [[[-1] * 2] * (n+1) for _ in range(n+1)]

for i in range(len(build_frame)):
    x = build_frame[i][0]
    y = build_frame[i][1]
    # 기둥/보, 건설/삭제
    graph[x][y] = [build_frame[i][2], build_frame[i][3]]

for i in range(n+1):
    print(graph[i])

for i in range(n+1):
    for j in range(n+1):
        if graph[i][j][0] == -1:
            continue
        # 건설
        elif graph[i][j][1] == 1:
            if graph[i][j][0] == 0:
                if j == 0 or (0 <= j-1 < n+1 and graph[i][j-1][0] == 0) or (0 <= i-1 < n+1 and graph[i-1][j][0] == 1):
                    continue
                else:
                    graph[i][j][0] = -1
            elif graph[i][j][0] == 1:
                if (0 <= j-1 < n+1 and graph[i][j-1][0] == 0) or (0 <= i+1 < n+1 and 0 <= j-1 < n+1 and graph[i+1][j-1][0] == 0) or (0 <= i-1 < n+1 and 0 <= i+1 < n+1 and graph[i-1][j][0] == 1 and graph[i+1][j][0] == 1):
                    continue
                else:
                    graph[i][j][0] = -1
        # 삭제
        # elif graph[i][j][1] == 0 :


for i in range(n+1):
    for j in range(n+1):
        if graph[i][j][0] == 1 or graph[i][j][0] == 0:
            print(i, j, graph[i][j][0])
