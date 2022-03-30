import sys
read = sys.stdin.readline

n = int(read())

num = read().strip()

print(sum(list(map(int, num))))