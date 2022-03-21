import sys
read = sys.stdin.readline

n = int(read())
grape = [0]
#dp를 [0] * n 하면 런타임 에러 남
#dp[0] = 0이어야 하나봄
dp = [0]

for i in range(n) :
    grape.append(int(read()))

'''
1 2 3 4 5가 있을 때 4의 방법 두 가지 :
1. 1+2+4
2. 1+3+4

5의 방법 두 가지 :
1. 1+2+4+5
2. 2+3+5

규칙을 찾아내면
1. dp[i-3] + grape[i-1] + grape[i]
2. dp[i-2] + grape[i]

but 마지막 잔을 안 먹을 수도 있음
-> 3. dp[i-1]
'''

dp.append(grape[1])
if n > 1 :
    dp.append(grape[1] + grape[2])
   
for i in range(3, n+1) :
    dp.append(max(dp[i-3] + grape[i-1] + grape[i], dp[i-2] + grape[i], dp[i-1]))

print(dp[n])