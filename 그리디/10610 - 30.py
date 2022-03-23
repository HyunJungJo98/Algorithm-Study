import sys
read = sys.stdin.readline

n = list(map(int, list(read().strip())))

if(0 not in n or sum(n) % 3 != 0) :
    print(-1)
else :
    n.sort(reverse=True)
    print(''.join(map(str, n)))