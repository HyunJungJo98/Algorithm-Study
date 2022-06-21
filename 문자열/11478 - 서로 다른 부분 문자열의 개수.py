import sys
read = sys.stdin.readline

s = read().strip()

result = set()
for i in range(1, len(s)+1):
    l = i
    for j in range(len(s)):
        result.add(s[j:j+l])

print(len(result))
