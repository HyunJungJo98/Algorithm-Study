import sys
read = sys.stdin.readline

n = int(read())


se = set()
for i in range(n):
    s = read().strip()
    se.add(s)

l = len(se)
result = 0
while l == len(se):
    a = set()
    for i in range(l):
        student = se.pop()[1:]
        result = len(student)
        a.add(student)
    se = a

print(result+1)
