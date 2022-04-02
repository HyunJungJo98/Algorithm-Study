import sys
read = sys.stdin.readline

n = int(read())

num = []

for i in range(n) :
    num.append(int(read()))

num.sort()

a = num[0]
most = [num[0]]
count = 1
max_count = 1

for i in range(1, n) :
    if a == num[i] :
        count += 1
    else :
        count = 1

    if count == max_count :
        most.append(num[i])
    elif count > max_count :
        most = [num[i]]
        max_count = count
    a = num[i]
    
print(round(sum(num)/n))
print(num[n//2])
if len(most) == 1 :
    print(most[0])
else :
    print(most[1])
print(num[-1]-num[0])