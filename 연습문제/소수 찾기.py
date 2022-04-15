from ast import Num


n = 10

num = set(range(2, n+1))

for i in range(2, n+1):
    if i in num:
        # i의 배수 빼기
        num -= set(range(2*i, n+1, i))
