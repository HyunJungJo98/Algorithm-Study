n = 16
t = 16
m = 2
p = 2


def find(x, n):
    a = []
    string = "0123456789ABCDEF"
    while x != 0:
        a.insert(0, string[x % n])
        x = x//n
    return ''.join(a)


result = "0"

b = 1
while len(result) < t*m:
    result += (find(b, n))
    b += 1
print(result)
x = 0
answer = ""
for i in range(p-1, m*t, m):
    answer += result[i]

print(answer)
