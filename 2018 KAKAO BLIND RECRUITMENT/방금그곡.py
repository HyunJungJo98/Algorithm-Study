m = "ABC"
musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]

# 악보 바꾸기


def changeCode(music):
    music = music.replace('C#', 'c')
    music = music.replace('D#', 'd')
    music = music.replace('F#', 'f')
    music = music.replace('G#', 'g')
    music = music.replace('A#', 'a')
    music = music.replace('E#', 'e')
    return music

# 노래 총 시간 구하기


def setTime(musicinfo):
    start = musicinfo[0]
    end = musicinfo[1]
    hour = 1 * (int(end.split(':')[0]) - int(start.split(':')[0]))
    if hour == 0:
        total = int(end.split(':')[1]) - int(start.split(':')[1])
    else:
        total = 60 * hour + int(end.split(':')[1]) - int(start.split(':')[1])

    return total


answer = []
# m의 악보 바꾸기
m = changeCode(m)

for i in range(len(musicinfos)):
    musicinfo = changeCode(musicinfos[i])
    musicinfo = musicinfo.split(',')
    time = setTime(musicinfo)

    # 시간이 더 짧은 경우 멜로디를 시간만큼 자르기
    if len(musicinfo[3]) >= time:
        melody = musicinfo[3][:time]
    # 시간이 더 긴 경우 멜로디를 반복해서 붙이기
    else:
        a = time // len(musicinfo[3])
        b = time % len(musicinfo[3])
        melody = musicinfo[3] * a + musicinfo[3][:b]
    if m in melody:
        answer.append([i, time, musicinfo[2]])

if len(answer) == 0:
    print("(None)")
    exit()
else:
    answer.sort(key=lambda x: (-x[1], x[0]))
    print(answer[0][2])

# 1. 비교할게 두 글자이면 한 글자로 바꾸기
# 2. 문자열을 반복해서 붙여야 하는 경우 몫과 나머지를 이용해서 붙이기


# 내 코드

# result = []

# for i in range(len(musicinfos)):
#     a = musicinfos[i].split(',')

#     time = int(a[1].split(':')[1]) - int(a[0].split(':')[1])
#     title = a[2]
#     oc = a[3]
#     lenght = time + oc.count('#')
#     print('lenght : ', lenght)
#     j = 0
#     if len(oc) < lenght:
#         while len(oc) != lenght+1:
#             if oc[j+1] == '#':
#                 oc += oc[j] + oc[j+1]
#                 j = (j+2) % len(oc)
#             else:
#                 oc += oc[j]
#                 j = (j+1) % len(oc)

#     print(oc)
#     if m in oc:
#         if (oc.index(m)+len(m) < lenght):
#             print(oc.index(m)+len(m))
#             if oc[oc.index(m)+len(m)] == '#':
#                 result.append([time, False, title])
#             else:
#                 result.append([time, True, title])
#     else:
#         result.append([time, False, title])

# time_max = 0
# time_max_idx = 0
# for i in range(len(result)):
#     if result[i][1] == True:
#         if time_max < result[i][0]:
#             time_max = result[i][0]
#             time_max_idx = i

# print(result)
# print(result[time_max_idx][2])
