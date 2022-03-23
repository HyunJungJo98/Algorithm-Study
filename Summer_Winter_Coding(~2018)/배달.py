from queue import PriorityQueue

N = 5
road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]
K = 3

q = PriorityQueue()

road.sort(key=lambda x : x[2])

print(road)

d = [987654321] * (N+1)

q.put([0, 1])
d[1] = 0

while not q.empty() :
    d_node, node = q.get()
    print(d_node, node)
    if d_node > d[node] :
        continue
    
    for i in range(len(road)) :
        #1하고 이어져 있으면
        if road[i][0] == node:
            new_node = road[i][1]
            weight = road[i][2]
            if d_node + weight < d[new_node] :
                d[new_node] = d_node + weight
                q.put([d[new_node], new_node])
        #양방향이어서 road[i][1]도 확인해줌
        elif road[i][1] == node:
            new_node = road[i][0]
            weight = road[i][2]
            if d_node + weight < d[new_node] :
                d[new_node] = d_node + weight
                q.put([d[new_node], new_node])

cnt = 0
for i in range(len(d)) :
    if d[i] <= K :
        cnt += 1

print(cnt)