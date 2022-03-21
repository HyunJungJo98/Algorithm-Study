import sys
read = sys.stdin.readline

n, m = map(int, read().split())
state = []

for i in range(n) :
    state.append(list(read().strip()))

first_color = state[0][0]

#wbwb로 칠하는 경우

    
