import sys
read = sys.stdin.readline

n = int(read())

cnt = 0
i = 0

while True :
    if cnt == n :
        break
    if str(i).count('666') >= 1 :
        cnt += 1
    i += 1

print(i-1)