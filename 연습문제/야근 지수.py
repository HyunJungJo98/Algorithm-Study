import heapq

works = [4, 3, 3]
n = 4

heap = []

if sum(works) <= n:
    result = 0
    exit()

for i in range(len(works)):
    heapq.heappush(heap, -works[i])

while n > 0:
    a = heapq.heappop(heap)
    print(a)
    a = abs(a)
    if a >= 0:
        a -= 1
        n -= 1
    heapq.heappush(heap, -a)

result = 0
for i in range(len(works)):
    a = heapq.heappop(heap)
    result += (a*a)
print(result)
