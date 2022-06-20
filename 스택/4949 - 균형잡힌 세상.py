import sys
read = sys.stdin.readline

while True:
    s = read().rstrip()
    if s == '.' and len(s) == 1:
        break
    stack = []
    for i in range(len(s)):
        if s[i] == '(':
            stack.append(s[i])
        elif s[i] == ')':
            if stack and stack[-1] == '(':
                stack.pop()
            else:
                stack.append(s[i])
        elif s[i] == '[':
            stack.append(s[i])
        elif s[i] == ']':
            if stack and stack[-1] == '[':
                stack.pop()
            else:
                stack.append(s[i])

    if stack:
        print('no')
    else:
        print('yes')
