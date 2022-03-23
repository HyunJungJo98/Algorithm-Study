import sys
read = sys.stdin.readline

n = int(read())
time = []

for i in range(n) :
    time.append(list(map(int, read().split())))

max_cnt = 0
min_start = 0

#끝나는 시간을 오름차순으로 정렬
#끝나는 시간이 같다면 시작 시간을 오름차순으로 정렬
#끝나는 시간이 같다면 빨리 시작한 순으로 -> 그래야 2번 선택 가능
time = sorted(time, key = lambda x: (x[1], x[0]))

last = 0
cnt = 0

for i in range(n):
    if time[i][0] >= last:
        cnt += 1
        last = time[i][1]

print(cnt)