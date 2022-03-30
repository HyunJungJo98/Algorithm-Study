import sys
read = sys.stdin.readline

s = int(read())
n = 1

while n*(n+1)/2 <= s :
    n+=1

print(n-1) 