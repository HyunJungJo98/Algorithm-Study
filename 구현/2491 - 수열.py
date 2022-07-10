import sys
read = sys.stdin.readline

n = int(read())
li = list(map(int, read().split()))

dp = []
dp2 = []

stack = [li[0]]
m = 0
for i in range(1, n):
    if stack:
        if stack[-1] <= li[i]:
            stack.append(li[i])
        else:
            if len(stack) > m:
                m = len(stack)
            stack = [li[i]]
    else:
        stack.append(li[i])

if len(stack) > m:
    m = len(stack)

stack = [li[0]]
m2 = 0
for i in range(1, n):
    if stack:
        if stack[-1] >= li[i]:
            stack.append(li[i])
        else:
            if len(stack) > m2:
                m2 = len(stack)
            stack = [li[i]]
    else:
        stack.append(li[i])

if len(stack) > m2:
    m2 = len(stack)

print(max(m, m2))
