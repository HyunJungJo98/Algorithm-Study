rows = 6
columns = 6
queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]

board = []
cnt = 1
for i in range(rows):
    a = []
    for j in range(columns):
        a.append(cnt)
        cnt += 1
    board.append(a)

result = []
for i in range(len(queries)):
    start = [queries[i][0]-1, queries[i][1]-1]
    end = [queries[i][2]-1, queries[i][3]-1]
    print(start, end)
    a = board[start[0]][start[1]]
    min_num = a
    for j in range(start[1]+1, end[1]+1):
        temp = board[start[0]][j]
        board[start[0]][j] = a
        a = temp
        if a < min_num:
            min_num = a
    for j in range(start[0]+1, end[0]+1):
        temp = board[j][end[1]]
        board[j][end[1]] = a
        a = temp
        if a < min_num:
            min_num = a
    for j in range(end[1]-1, start[1]-1, -1):
        temp = board[end[0]][j]
        board[end[0]][j] = a
        a = temp
        if a < min_num:
            min_num = a
    for j in range(end[0]-1, start[0]-1, -1):
        temp = board[j][start[1]]
        board[j][start[1]] = a
        a = temp
        if a < min_num:
            min_num = a
    result.append(min_num)

print(result)
