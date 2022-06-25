import sys
read = sys.stdin.readline

k = int(read())

a = []

max_height = 0
max_width = 0
h_idx = 0
w_idx = 0

for i in range(6):
    d, l = map(int, read().split())
    a.append(l)
    if d == 1 or d == 2:
        if l > max_width:
            max_width = l
            w_idx = i
    else:
        if l > max_height:
            max_height = l
            h_idx = i

result = a[h_idx] * a[w_idx] - (abs(a[h_idx-1] - a[(h_idx+1) % 6])
                                * abs(a[w_idx-1] - a[(w_idx+1) % 6]))

print(result * k)
