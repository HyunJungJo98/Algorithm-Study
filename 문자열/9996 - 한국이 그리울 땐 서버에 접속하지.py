import sys
read = sys.stdin.readline

n = int(read())

pattern = read().strip()
pattern = pattern.split('*')
l1 = len(pattern[0])
l2 = len(pattern[1])

for i in range(n):
    s = read().strip()
    if s[:l1] == pattern[0] and s[l1:][-l2:] == pattern[1]:
        print('DA')
    else:
        print('NE')
