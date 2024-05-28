import sys
import heapq

n = int(sys.stdin.readline())

minHeap = []
maxHeap = []

for i in range(n):
    num = int(sys.stdin.readline())
    
    if len(maxHeap) == 0 or -maxHeap[0] > num:
        heapq.heappush(maxHeap, -num)
    else:
        heapq.heappush(minHeap, num)
    
    if len(maxHeap) > len(minHeap) + 1:
        heapq.heappush(minHeap, -heapq.heappop(maxHeap))
    elif len(minHeap) > len(maxHeap):
        heapq.heappush(maxHeap, -heapq.heappop(minHeap))

    print(-maxHeap[0])
