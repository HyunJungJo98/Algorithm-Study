import sys
read = sys.stdin.readline

t = int(read())

result = []
for i in range(t):
    r, s = read().split(' ')
    r = int(r)
    s = s.strip()

    string = ""
    for j in range(len(s)):
        string += s[j] * r
    result.append(string)

print('\n'.join(result))
