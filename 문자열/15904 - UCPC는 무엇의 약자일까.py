import sys
read = sys.stdin.readline

s = read().strip()

def find(alpha) :
    start = -1
    result = False
    for i in range(len(s)) :
        if s[i] == alpha :
            start = i
            result = True
            break
    return (result, start)

result = True
start = 0
ucpc = ['U', 'C', 'P', 'C']
for i in ucpc :
    a, b = find(i)
    if not a :
        result = False
        break
    if b >= len(s) and i != 'C' :
        result = False
        break
    s = s[b:]

if result :
    print('I love UCPC')
else :
    print('I hate UCPC')