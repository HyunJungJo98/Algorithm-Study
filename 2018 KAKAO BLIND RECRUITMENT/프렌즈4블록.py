from collections import deque

m = 4
n = 5
board = ["CCBDE", "AAADE", "AAABF", "CCBBF"]

# visited = [[0]*n for _ in range(m)]

# dx = [1, 0, 1]
# dy = [0, 1, 1]

# q = deque()

# def bfs(a, b) :
#     q.append((a, b))
#     visited[b][a] = 1

#     cnt = 1
#     cnt_x = 0
#     cnt_y = 0

#     while q :
#         a, b = q.popleft()
#         print(board[b][a])
#         for i in range(len(dx)) :
            
#             na, nb = dx[i]+a, dy[i]+b
#             if 0<=na<n and 0<=nb<m :
#                 if board[b][a] == board[nb][na] and visited[nb][na] == 0:
#                     q.append((na, nb))
#                     visited[nb][na] = 1
#                     cnt += 1
#                     if i == 0 :
#                         cnt_x += 1
#                     elif i == 1 :
#                         cnt_y += 1
#                     else :
#                         cnt_x += 1
#                         cnt_y += 1
#     return (cnt, cnt_x, cnt_y)

# for i in range(m) :
#     for j in range(n) :
#         if visited[i][j] == 0 :
#             print(bfs(j, i))
#             print("-----")

answer = 0
for i in range(len(board)):
    #board를 2차원 배열로 만들기
    board[i] = list(board[i])

while True:
    remove = [[0]*n for _ in range(m)]
    for i in range(m - 1):
        for j in range(n - 1):
            #주변 4개가 같으면 remove에 해당 좌표 1로 표시
            if board[i][j] != 0 and board[i][j] == board[i][j + 1] and board[i][j] == board[i + 1][j] and board[i][j] == board[i + 1][j + 1]: 
                remove[i][j], remove[i][j + 1], remove[i + 1][j], remove[i + 1][j + 1] = 1, 1, 1, 1

    # 지워진 블록 개수 세기
    print('remove : ', remove)
    print('board : ', board)
    count = 0
    for i in range(m):
        count += sum(remove[i])
    answer += count
    # 지워진 블록이 없을 경우 break
    if count == 0:
        break

    # 지워진 블록을 위의 블록으로 채우기
    # 제일 아래층부터 검사
    for i in range(m - 1, -1, -1): 
        for j in range(n):
            # 아래층부터 제일 처음 지워진 블록 찾기
            if remove[i][j] == 1:
                # 그 위의 블록을 x로 잡기
                x = i - 1
                # 내려질 블록 찾기
                # x가 0보다 크거나 같고(범위를 넘으면 안 되므로)
                # remove[x][j] == 1이면 지워진 블록이므로 내리지 못하기 때문에 한 층 더 올라감
                # 제일 위쪽(내려질 블록이 없는 상태)이거나 내려질 블록을 찾으면 탈출
                while x >= 0 and remove[x][j] == 1:
                    x -= 1
                # 내려질 블록이 없는 상태(위가 다 비어있는 상태)이면 지워진 블록을 0으로 채움
                if x < 0:
                    board[i][j] = 0
                # 내려질 블록이 있는 상태
                else:
                    # 밑으로 내리기
                    board[i][j] = board[x][j]
                    # 밑으로 내려진 블록을 지워졌다고 표시하기
                    remove[x][j] = 1

print(answer)