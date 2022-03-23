import sys
read = sys.stdin.readline

n = int(read())

num = [True] * 1001

if n >= 100 :
    for i in range(100, n+1) :
        a = list(map(int, list(str(i))))
        d = a[1] - a[0]
        
        for j in range(1, len(a)-1) :
            if d != a[j+1] - a[j] :
                num[i] = False
                break

cnt = 0    
for i in range(1, n+1) :
    if num[i] == True :
        cnt += 1
print(cnt)