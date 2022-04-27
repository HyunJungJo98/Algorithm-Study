from collections import deque

priorities = [2, 1, 3, 2]
location = 2

q = deque()

for i in range(len(priorities)):
    q.append((priorities[i], i))

priorities.sort()
result = []
while q:
    max_num = priorities[-1]
    current, idx = q.popleft()
    if current < max_num:
        q.append((current, idx))
    else:
        result.append([current, idx])
        priorities.pop()

answer = 0
for i in range(len(result)):
    if result[i][1] == location:
        answer = i
        break

print(answer+1)
