import sys
read = sys.stdin.readline

def cal(won, k) :
    global cnt
    index = len(won) - 1
    won_max = won[index]
    
    while(k!=0) :
        if won_max > k :
            index -= 1
            won_max = won[index]
        else :
            cnt += k // won_max
            k = k % won_max

    return cnt


n, k = map(int, read().split())
won = []
cnt = 0

for i in range(n) :
    won.append(int(read()))

print(cal(won, k))
