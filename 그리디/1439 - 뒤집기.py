import sys
read = sys.stdin.readline

s = read().strip()

result = [0, 0]
for i in range(1, len(s)):
    if s[i] == s[i-1]:
        continue
    if s[i] == '0' and s[i-1] == '1':
        result[1] += 1
    elif s[i] == '1' and s[i-1] == '0':
        result[0] += 1

result[int(s[-1])] += 1

print(min(result))
