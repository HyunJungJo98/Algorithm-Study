import sys
read = sys.stdin.readline

k = int(read())
stack = []
for i in range(k):
    num = int(read())
    if num == 0 and stack:
        stack.pop()
    else:
        stack.append(num)

if stack:
    print(sum(stack))
else:
    print(0)
