numbers = [5, 8, 4, 0, 6, 7, 9]

numbers.sort()

cnt = 0
result = 0
while cnt != 10:
    if cnt not in numbers:
        result += cnt
    cnt += 1

print(result)
