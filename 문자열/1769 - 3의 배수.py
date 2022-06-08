import sys
read = sys.stdin.readline

x = int(read())

cnt = 0
while x > 9:
    x = sum(list(map(int, str(x))))
    cnt += 1

print(cnt)
if x % 3 == 0:
    print('YES')
else:
    print('NO')
