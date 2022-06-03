import sys
read = sys.stdin.readline

n = int(read())
li = list(map(int, read().split()))

li.sort(key=abs)
answer = 9876543210
answer_li = [0, 0]
for i in range(1, n):
    if abs(li[i] + li[i-1]) < answer:
        answer = abs(li[i] + li[i-1])
        answer_li = [li[i-1], li[i]]

answer_li.sort()
print(answer_li[0], answer_li[1])
