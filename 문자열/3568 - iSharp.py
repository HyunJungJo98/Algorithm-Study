import sys
read = sys.stdin.readline

s = read().strip()
s = s.replace(',', '').replace(';', '')

string = s.split()

t = string[0]

for i in range(1, len(string)):
    result = t
    idx = len(string[i]) - 1
    al_idx = 0
    while idx > 0:
        if string[i][idx].isalpha():
            al_idx = idx
            break
        elif string[i][idx] == ']':
            result += '[]'
            idx -= 2
        else:
            result += string[i][idx]
            idx -= 1
    print(result, string[i][:al_idx+1]+';')
