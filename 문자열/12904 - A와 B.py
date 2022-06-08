import sys
read = sys.stdin.readline

s = read().strip()
t = list(read().strip())

reverse = 0
while len(t) != len(s):
    if reverse % 2 == 1:
        al = t.pop(0)
        if al == 'A':
            continue
        else:
            reverse += 1
    else:
        al = t.pop()
        if al == 'A':
            continue
        else:
            reverse += 1

if reverse % 2 == 1:
    t.reverse()
if ''.join(t) != s:
    print(0)
else:
    print(1)
