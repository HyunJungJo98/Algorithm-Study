import sys
read = sys.stdin.readline

name = read().strip()

cnt = [0] * 26

for n in name :
    cnt[ord(n)-65] += 1

# 홀수가 있으면 홀수 기준으로 대칭
# 짝수만 있으면 그냥 대칭

string = ''
odd = 0
odd_alpha = ''
for i in range(26) :
    if odd > 1 :
        print('I\'m Sorry Hansoo')
        exit()
    if cnt[i] % 2 == 1 :
        odd += 1
        odd_alpha = chr(i+65)
    string = string + (chr(i+65) * (cnt[i]//2))

if odd > 1 :
    print('I\'m Sorry Hansoo')
else :
    print(string+odd_alpha+string[::-1])