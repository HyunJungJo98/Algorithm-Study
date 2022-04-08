import sys
read = sys.stdin.readline

s = read().strip()
bomb = list(read().strip())

b_len = len(bomb)

stack = []

for i in range(len(s)) :
    stack.append(s[i])
    # 끝자리를 먼저 비교하기
    if stack[-1] == bomb[-1] :
        # 나머지가 같으면 그만큼 빼주기
        if stack[-b_len:] == bomb :
            for i in range(b_len) :
                stack.pop()

if ''.join(stack) == '' :
    print('FRULA')
else :
    print(''.join(stack))