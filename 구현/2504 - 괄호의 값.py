import sys
read = sys.stdin.readline

s = read().strip()

stack = []
result = 0
# 곱할 배수
tmp = 1

for i in range(len(s)) :
    if s[i] == '(' :
        stack.append(s[i])
        tmp *= 2
    elif s[i] == '[' :
        stack.append(s[i])
        tmp *= 3
    elif s[i] == ')' :
        if len(stack) == 0 or stack[-1] == '[' :
            result = 0
            break
        # 직전의 괄호가 '('가 아니면 이미 계산했으므로 계산하지 않음
        if s[i-1] == '(' :
            result += tmp
        stack.pop()
        tmp //= 2
    else :
        if len(stack) == 0 or stack[-1] == '(' :
            result = 0
            break
        # 직전의 괄호가 '['가 아니면 이미 계산했으므로 계산하지 않음
        if s[i-1] == '[' :
            result += tmp
        stack.pop()
        tmp //= 3

if stack :
    print(0)
else :
    print(result)