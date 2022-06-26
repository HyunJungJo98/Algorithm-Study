from collections import deque
import sys
read = sys.stdin.readline

s = read().strip()
m = int(read())
n = len(s)

stack = list(s)
string = deque()
for i in range(m):
    order = read().strip()
    if order == 'L':
        if stack:
            string.appendleft(stack.pop())
    elif order == 'D':
        if len(string) > 0:
            stack.append(string.popleft())
    elif order == 'B':
        if stack:
            stack.pop()
    else:
        order = order.split()
        stack.append(order[1])

print(''.join(stack) + ''.join(string))
