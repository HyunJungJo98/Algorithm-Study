import heapq

# PriorityQueue로 하면 효율성이 안 됨
scoville = [1, 1, 100]
K = 7

heapq.heapify(scoville)
cnt = 0
while scoville[0] < K:
    if len(scoville) == 1:
        cnt = -1
        break

    a = heapq.heappop(scoville)
    b = heapq.heappop(scoville)
    heapq.heappush(scoville, a + (b*2))
    cnt += 1

print(cnt)
