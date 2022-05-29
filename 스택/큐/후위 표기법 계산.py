s = '3 8 * 4 +'

arr = s.split()

stack = []
for i in range(len(arr)):
    if arr[i].isnumeric():
        stack.append(int(arr[i]))
    else:
        if arr[i] == '*':
            stack.append(stack.pop() * stack.pop())
        elif arr[i] == '+':
            stack.append(stack.pop() + stack.pop())
        elif arr[i] == '-':
            a = stack.pop()
            b = stack.pop()
            stack.append(b-a)
        elif arr[i] == '/':
            a = stack.pop()
            b = stack.pop()
            stack.append(b//a)

print(stack)
