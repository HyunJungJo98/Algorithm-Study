import sys
read = sys.stdin.readline

s = read().rstrip()

string = ''

if s[0] == '_' or s[-1] == '_' or s[0].isupper():
    print('Error!')
    exit()

if '_' in s:
    s = s.split('_')
    if not s[0].islower():
        print('Error!')
        exit()
    string += s[0]
    for i in range(1, len(s)):
        if s[i] == '' or not s[i].islower():
            print('Error!')
            exit()
        string += s[i][0].upper()
        string += s[i][1:]
else:
    idx = 0
    for i in range(len(s)):
        if s[i].isupper():
            string += s[idx:i].lower() + '_'
            idx = i

    string += s[idx:].lower()

print(string)
