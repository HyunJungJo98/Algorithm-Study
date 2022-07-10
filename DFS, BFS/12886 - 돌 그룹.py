import sys
read = sys.stdin.readline

a, b, c = map(int, read().split())

if (a+b+c) % 3 != 0:
    print(0)
    exit()
