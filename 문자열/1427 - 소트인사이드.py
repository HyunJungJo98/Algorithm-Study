import sys
read = sys.stdin.readline

n = read().strip()
n = list(n)

n.sort(reverse=True)

print(''.join(n))
