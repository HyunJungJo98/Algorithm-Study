import sys
read = sys.stdin.readline

num = int(read())

words = set()

for i in range(num):
    words.add(read().strip())

words = list(words)
words.sort()
words.sort(key=len)

print('\n'.join(words))
