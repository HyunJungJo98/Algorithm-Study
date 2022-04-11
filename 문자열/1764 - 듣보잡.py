import sys
read = sys.stdin.readline

n, m = map(int, read().split())

hear = set()
see = set()

for i in range(n):
    hear.add(read().strip())

for i in range(m):
    see.add(read().strip())

result = list(hear & see)
result.sort()
cnt = len(result)

print(cnt)
print('\n'.join(result))
