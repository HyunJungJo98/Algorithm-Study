import sys
read = sys.stdin.readline

t = int(read())
cnt_list = []
for i in range(t) :
    s = read().strip()
    current = 0
    cnt = 0
    for j in range(len(s)) :
        if s[j] == 'O' :
            current += 1
            cnt += current
        else :
            current = 0
    cnt_list.append(cnt)

for i in range(len(cnt_list)) :
    print(cnt_list[i])