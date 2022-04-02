from collections import deque
import sys

read = sys.stdin.readline

'''
def dfs(x, y) :
    visit_list[x][y] = 1
    global homeCnt
    homeCnt = homeCnt + 1

    for k in range(4):
        nx = dx[k] + x
        ny = dy[k] + y
        
        if (nx>=0) and (ny>=0) and (nx<n) and (ny<n) :
            if visit_list[nx][ny] == 0 and graph[nx][ny] == 1:
                dfs(nx, ny)
'''

def bfs(x, y) :
    global homeCnt
    homeCnt = homeCnt + 1
    q = deque()
    q.append((x, y))
    visit_list[x][y] = 1
    
    while q :
        x, y = q.popleft()
        for k in range(4):
            nx = dx[k] + x
            ny = dy[k] + y
            if (nx>=0) and (ny>=0) and (nx<n) and (ny<n) :
                  if visit_list[nx][ny] == 0 and graph[nx][ny] == 1:
                        q.append((nx, ny))
                        visit_list[nx][ny] = 1
                        homeCnt = homeCnt + 1


n = int(read())
graph = [[0] * n for _ in range(n)]

#사용자한테 0, 1 입력받기
for i in range(n) :
    graph[i] = list(map(int, read().strip()))


#방문했는지 확인하기
visit_list = [[0] * n for _ in range(n)]

#좌표 리스트
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

cnt = 0
homeCnt = 0
homeList = []


#탐색 시작할 노드 찾기
for i in range(n) :
    for j in range(n) :
        if visit_list[i][j] == 0 and graph[i][j] == 1 :
            cnt = cnt + 1
            homeCnt = 0
            #dfs(i, j)
            bfs(i, j)
            homeList.append(homeCnt)


print(cnt)
homeList.sort()
for i in homeList :
    print(i)
