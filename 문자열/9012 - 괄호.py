from re import S
import sys
from unittest import result
read = sys.stdin.readline

t = int(read())
result = []

for i in range(t) :
    s = read().strip()
    stack = []
    for i in range(len(s)) :
        if len(stack) != 0 :
            if s[i] == ')' and stack[-1] == '(' :
                stack.pop()
            elif s[i] == '(' :
                stack.append(s[i])
        else :
            stack.append(s[i])
    if len(stack) != 0 :
        result.append('NO')
    else :
        result.append('YES')

print('\n'.join(result))