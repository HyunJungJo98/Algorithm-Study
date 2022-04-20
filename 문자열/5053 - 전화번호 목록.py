import sys
read = sys.stdin.readline

t = int(read())
answer = []

for i in range(t):
    n = int(read())
    strings = []
    for j in range(n):
        strings.append(read().strip())
    strings.sort()
    result = True
    for j in range(1, len(strings)):
        length = len(strings[j-1])
        if strings[j-1] in strings[j][:length]:
            result = False
            break
    if result:
        answer.append('YES')
    else:
        answer.append('NO')


print('\n'.join(answer))
