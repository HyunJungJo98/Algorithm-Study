import sys
import heapq
read = sys.stdin.readline

n = int(read())
card = []

for i in range(n) :
    card.append(int(read()))

#card 리스트를 heap으로 만들어줌
heapq.heapify(card)

if len(card) == 1 :
    print(0)

else :
    result = []
    while len(card) > 1:
        #heappop은 제일 작은 걸 pop함
        num1 = heapq.heappop(card)
        num2 = heapq.heappop(card)
        #heap에서 제일 작은 두 수를 더함
        result.append(num1 + num2)
        heapq.heappush(card, num1+num2)
    print(sum(result))

'''
또는
else :
    result = 0
    while len(card) > 1:
        num1 = heapq.heappop(card)
        num2 = heapq.heappop(card)
        result += num1 + num2
        heapq.heappush(card, num1+num2)
    print(result)

'''