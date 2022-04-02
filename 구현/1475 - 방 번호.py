import sys
read = sys.stdin.readline

n = int(read())

n = str(n)

num = [0] * 10
nine_count = 0
for i in range(len(n)) :
    if n[i] == '9' :
        num[6] += 1
        nine_count += 1
        continue
    num[int(n[i])] += 1
num[6] = (num[6] + 1) // 2

print(max(num))