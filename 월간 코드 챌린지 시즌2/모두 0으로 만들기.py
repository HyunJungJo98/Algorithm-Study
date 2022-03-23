from queue import PriorityQueue

a = [-5,0,2,1,2]
edges = [[0,1],[3,4],[2,3],[0,3]]

answer = 0

q = PriorityQueue()
visited = [0] * len(a)

if sum(a) != 0 :
    answer = -1
    #return

else :
    answer = 0

graph = [[0]*len(a) for _ in range(len(a))]

for i in range(len(edges)) :
    graph[edges[i][0]][edges[i][1]] = 1
    graph[edges[i][1]][edges[i][0]] = 1

def dfs(x) :
    global answer
    
    visited[x] = 1

    for i in len(graph):
        if graph[edges[i][0]][edges[i][1]] == 1:
            a[x] += dfs(y, a, tree, visited)
    answer += abs(a[x])
        
    return a[x]
# min_w = min(a)
# min_node = a.index(min(a))

# q.put([min_w, min_node])
# visited[min_node] = 1

# cnt = 0
# answer = 0

# while not q.empty() :
#     current_w, current_node = q.get()
#     print(current_w, current_node)
#     print('cnt : ', cnt)
#     for i in range(len(edges)) :
#         cnt2 
#         if (edges[i][0] == current_node) and visited[edges[i][1]] == 0:
#             #가중치, 노드번호
#             q.put([a[edges[i][1]], edges[i][1]])
#             visited[edges[i][1]] = 1
#         elif edges[i][1] == current_node and visited[edges[i][0]] == 0 :
#             q.put([a[edges[i][0]], edges[i][0]])
#             visited[edges[i][0]] = 1

#     if cnt == 1 :
#         cnt += 1
#         continue
#     else :
#         cnt += 1
#         answer += abs(current_w)
#         print('answer :' , answer)

# print(answer)
