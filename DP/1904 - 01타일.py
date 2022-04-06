import sys
read = sys.stdin.readline

n = int(read())

if n <= 2 :
    print(n)
    exit()

dp1 = [0, 1]
dp2 = [1, 1]

for i in range(2, n) :
    c = []
    c.append(dp2[1]%15746)
    c.append((dp1[1]+dp2[1]%15746))
    #print(c)
    dp1 = dp2
    dp2 = c

print(sum(c)%15746)
