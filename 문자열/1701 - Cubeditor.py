import sys
read = sys.stdin.readline


def make_table(p):
    l = len(p)
    table = [0] * l
    j = 0
    for i in range(1, l):
        while j > 0 and p[i] != p[j]:
            j = table[j-1]
        if p[i] == p[j]:
            j += 1
            table[i] = j

    return max(table)


s = read().strip()

result = 0

for i in range(len(s)):
    sub_s = s[i:]
    result = max(result, make_table(sub_s))

print(result)
