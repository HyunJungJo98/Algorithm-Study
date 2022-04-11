n = 30

a = n // 3
b = n % 3

result = ''

if b == 0:
    a = a - 1
    b = 4

result += str(b)

while a > 0:
    b = a % 3
    a = a // 3
    if b == 0:
        a = a - 1
        b = 4
    result = str(b) + result

if a != 0:
    result = str(a) + result

print(result)
