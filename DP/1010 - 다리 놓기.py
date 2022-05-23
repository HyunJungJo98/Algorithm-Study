import math
import sys
read = sys.stdin.readline

t = int(read())

# 조합 공식
for i in range(t) :
    n, m = map(int, read().split())
    result = math.factorial(m)//(math.factorial(n)*math.factorial(m-n))
    print(result)
