import sys
read = sys.stdin.readline

n = int(read())
dae = {}
young = []

for i in range(n):
    dae[read().strip()] = i

for i in range(n):
    young.append(read().strip())

cnt = 0

for i in range(n):
    for j in range(i+1, n):
        # 나온 차량 순서대로 검사
        # 들어올 때 현재 차량보다 앞에 있었던 차량이
        # 나갈 땐 현재 차량보다 뒤에 있으면 추월한 것
        if dae[young[i]] > dae[young[j]]:
            cnt += 1
            break

print(cnt)
