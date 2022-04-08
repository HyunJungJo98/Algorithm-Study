import sys
read = sys.stdin.readline

t = int(read())

result = []

for i in range(t) :
    p = read().strip()
    n = int(read())
    arr = read().strip()
    if arr != '[]' :
        arr = list(map(int, arr[1:-1].split(',')))
    else :
        arr = []

    idx = 0
    delete = [0, 0]
    head = 0
    stack = []
    while True :
        if idx == len(p) :
            break
        if p[idx] == 'R' :
            if len(stack) > 0 and stack[-1] == 'R':
                stack.pop()
                head = 0
            else :
                head = 1
                stack.append(p[idx])
        else :
            delete[head] += 1
        idx += 1
    
    if sum(delete) > n :
        result.append('error')
        continue
    if delete[1] == 0 :
        arr = arr[delete[0]:]
    else :
        arr = arr[delete[0]:-delete[1]]
    if len(stack) != 0 :
        arr.reverse()
    string = '['
    string += ','.join(map(str, arr))
    string += ']'
    result.append(string)

print('\n'.join(map(str, result)))