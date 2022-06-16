import sys
read = sys.stdin.readline

s = read().strip()
cnt = 1
while '-' not in s:
    stack = []
    result = 0
    for i in range(len(s)):
        if not stack and s[i] == '}':
            # 미리 바꿔주기
            result += 1
            stack.append('{')
        elif stack and s[i] == '}':
            stack.pop()
        else:
            stack.append(s[i])

    # stack에 { 밖에 안 남으므로 반만 바꿔주기(길이는 항상 짝수로 들어오므로)
    result += len(stack)//2
    print(str(cnt) + '.', result)
    cnt += 1

    s = read().strip()
