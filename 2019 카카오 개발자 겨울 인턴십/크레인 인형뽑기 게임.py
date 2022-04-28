board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [
    0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]

board2 = [[] for _ in range(len(board))]

for i in range(len(board)):
    for j in range(len(board[i])):
        if board[i][j] != 0:
            board2[j].append(board[i][j])

print(board2)
cnt = 0
stack = []
for i in range(len(moves)):
    a = moves[i]-1
    print(stack)
    if board2[a]:
        current = board2[a].pop(0)
        if stack and stack[-1] == current:
            cnt += 1
            while stack and stack[-1] == current:
                stack.pop()
                cnt += 1
        else:
            stack.append(current)

print(cnt)
