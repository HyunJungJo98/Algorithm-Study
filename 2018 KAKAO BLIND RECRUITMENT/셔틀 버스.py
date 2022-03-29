n = 1
t = 1
m = 5
timetable = ["08:00", "08:01", "08:02", "08:03"]

new_t = []
for i in range(len(timetable)):
    new_t.append(int(timetable[i][:2])*60 + int(timetable[i][3:]))
new_t.sort(reverse=True)

bus = []
for i in range(n):
    bus.append(540+(i*t))

bus_index = 0
result = 0

while bus_index < len(bus):
    stack = []
    bus_people = 0

    # 버스에 사람이 꽉 찰 때까지 태우기
    while bus_people != m:
        # 탈 사람이 한 명이라도 남았고
        # 현재 버스보다 빨리 온 사람들 현재 버스에 넣어주기
        if len(new_t) >= 1 and new_t[len(new_t)-1] <= bus[bus_index]:
            bus_people += 1
            stack.append(new_t.pop())
        # 탈 사람이 없거나 버스 시간에 맞춰 온 사람이 없으면 버스가 감
        else:
            break

    # 마지막 버스인데
    if bus_index == len(bus) - 1:
        # 정원이 다 찼으면
        if bus_people == m:
            # 마지막으로 탄 사람 pop하고 그 사람보다 1분 먼저 오기
            result = stack.pop() - 1
        # 정원이 다 안 찼으면
        else:
            # 마지막 버스 시간에 맞춰서 나오기
            result = bus[bus_index]

    bus_index += 1

answer = ""
if result//60 < 10:
    answer += '0' + str(result//60)
else:
    answer += str(result//60)
answer += ':'
if result % 60 < 10:
    answer += '0'+str(result % 60)
else:
    answer += str(result % 60)

print(answer)
