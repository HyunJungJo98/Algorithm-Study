import sys
read = sys.stdin.readline


def male(switch, start, number):
    while start < len(switch):
        if switch[start] == 0:
            switch[start] = 1
        else:
            switch[start] = 0
        start += number
    return switch


def female(switch, start):
    left = start-1
    right = start+1
    while left >= 0 and right < len(switch) and switch[left] == switch[right]:
        if switch[left] == 0:
            switch[left] = 1
        else:
            switch[left] = 0
        if switch[right] == 0:
            switch[right] = 1
        else:
            switch[right] = 0
        left -= 1
        right += 1
    if switch[start] == 0:
        switch[start] = 1
    else:
        switch[start] = 0
    return switch


n = int(read())
switch = list(map(int, read().split()))
students = int(read())
for i in range(students):
    gender, number = map(int, read().split())
    if gender == 1:
        switch = male(switch, number-1, number)
    else:
        switch = female(switch, number-1)

cnt = 0
for i in range(n):
    if cnt == 19:
        print(switch[i])
        cnt = 0
    else:
        print(switch[i], end=' ')
        cnt += 1
