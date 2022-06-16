import sys
read = sys.stdin.readline

n, k = map(int, read().split())

visited = [0] * n

result = []
idx = 0
while 0 in visited:
    cnt = 0
    while cnt < k:
        if visited[idx] == 0:
            cnt += 1
            if cnt == k:
                result.append(idx+1)
                visited[idx] = 1
        idx = (idx + 1) % n

print('<' + ', '.join(map(str, result)) + '>')
