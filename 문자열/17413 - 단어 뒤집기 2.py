import sys
read = sys.stdin.readline

s = read().strip()

stack = []
result = ''
temp = []
for i in range(len(s)) :
    # print(stack)
    # print('result: ', result)
    if s[i] == '<' :
        result += ''.join(temp[::-1])
        temp = []
        stack.append(s[i])
        continue
    elif len(stack) != 0 :
        stack.append(s[i])
        if s[i] == '>' :
            result += ''.join(stack)
            stack = []

    if len(stack) == 0 and s[i] != '>' :
        if s[i] == ' ' :
            result += ''.join(temp[::-1])
            result += ' '
            temp = []
        else :
            temp.append(s[i])

if stack :
    result+= ''.join(stack)
if temp :
    result+= ''.join(temp[::-1])

print(result)