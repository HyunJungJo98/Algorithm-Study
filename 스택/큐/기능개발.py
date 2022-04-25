
progresses = [93, 30, 55]
speeds = [1, 30, 5]

stack = []
for i in range(len(progresses)):
    a = 100 - progresses[i]
    day = a // speeds[i]
    if a % speeds[i] != 0:
        day += 1
    stack.append(day)

print(stack)

s_max = stack[0]
cnt = 1
result = []
for i in range(1, len(stack)):
    if stack[i] <= s_max:
        cnt += 1
    else:
        result.append(cnt)
        cnt = 1
        s_max = stack[i]
result.append(cnt)
print(result)
