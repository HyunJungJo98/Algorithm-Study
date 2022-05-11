import sys
read = sys.stdin.readline

n, m = map(int, read().split())
dnas = [{"A":0, "C":0, "G":0, "T":0} for _ in range(m)]
result = ""
hd = 0

for i in range(n) :
    s = read().strip()
    for j in range(m) :
        dnas[j][s[j]] += 1

for i in range(m) :
    max_al = ''
    max_num = 0
    for key in dnas[i].keys() :
        if dnas[i][key] > max_num :
            max_al = key
            max_num = dnas[i][key]
    result += max_al
    hd = hd + (n-max_num)

print(result)
print(hd)