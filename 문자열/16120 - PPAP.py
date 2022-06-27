import sys
read = sys.stdin.readline

pa = read().strip()

stack = []
for i in range(len(pa)):
    if len(stack) >= 4:
        if stack[-4]+stack[-3]+stack[-2]+stack[-1] == 'PPAP':
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            stack.append('P')
        stack.append(pa[i])
    else:
        stack.append(pa[i])


if ''.join(stack) == 'PPAP' or stack == ['P']:
    print('PPAP')
else:
    print('NP')
