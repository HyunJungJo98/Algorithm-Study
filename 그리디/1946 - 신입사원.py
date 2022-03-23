import sys
read = sys.stdin.readline

t = int(read())
cnt_list = []

for _ in range(t) :
    s = []

    n = int(read())
    for i in range(n) :
        s.append(list(map(int, read().split())))
    s = sorted(s, key=lambda x : (x[0], x[1]))

    m = s[0][1]

    cnt = 1
    for i in range(1, n) :
        if s[i][1]<m :
            m = s[i][1]
            cnt += 1
    cnt_list.append(cnt)

print('\n'.join(map(str, cnt_list)))

'''
시간 초과 난 이유

정렬을 했으면 [1, a], [2, b], [3, c] ...로
앞의 숫자는 무조건 증가하기 때문에 뒤만 비교하면 됐음
'''        
