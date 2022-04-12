import sys
read = sys.stdin.readline

n = int(read())
m = int(read())
s = read().strip()

p = ''

idx = 0

while idx != n*2:
    if idx % 2 == 0:
        p += 'I'
    else:
        p += 'O'
    idx += 1

p += 'I'

cnt = 0

while True:
    if p not in s:
        break
    else:
        start = s.index(p)
        cnt += 1
        s = s[start+1:]
print(cnt)
