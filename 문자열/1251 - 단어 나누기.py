import sys
read = sys.stdin.readline

s = read().strip()
l = len(s)

result = []
for i in range(1, l):
    one = s[:i]
    for j in range(i+1, l):
        two = s[i:j]
        three = s[j:]
        result.append(one[::-1] + two[::-1] + three[::-1])

result.sort()
print(result[0])
