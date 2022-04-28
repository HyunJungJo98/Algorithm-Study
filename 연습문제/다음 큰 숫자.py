n = 78

num = bin(n)[2:].count('1')

result = 0
while True:
    n = n+1
    if bin(n)[2:].count('1') == num:
        result = n
        break

print(result)
