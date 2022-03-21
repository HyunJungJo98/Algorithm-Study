import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))
op = list(map(int, read().split()))

result = []
b = []

def dfs() :
    if len(b) == n-1 :
        b_sum = a[0]
        for i in range(1, n) :
            if(b[i-1] == 0) :
                b_sum = b_sum + a[i]
            elif(b[i-1] == 1) :
                b_sum = b_sum - a[i]
            elif (b[i-1] == 2) :
                b_sum = b_sum * a[i]
            elif (b[i-1] == 3) :
                if b_sum < 0 :
                    b_sum = -b_sum
                    b_sum = b_sum // a[i]
                    b_sum = -b_sum
                else :
                    b_sum = b_sum // a[i]
        result.append(b_sum)
        return
    for i in range(4) :
        if(op[i] != 0) :
            b.append(i)
            op[i] -= 1
            dfs()
            op[i] += 1
            b.pop()
        
dfs()

print(max(result))
print(min(result))