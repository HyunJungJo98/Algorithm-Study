s = "110010101001"

cnt2 = 0
cnt3 = 0

while s != '1' :
    cnt = 0
    if '0' in s :
        for i in range(len(s)) :
            if (s[i] == '0') :
                cnt += 1
                cnt3 += 1

    num = len(s)-cnt
    new_s = []

    while num > 0 :
        new_s.append(num%2)
        num = num//2

    new_s.sort(reverse=True)
    s = ''.join(map(str, new_s))
    print(s)
    cnt2 +=1

answer = [cnt2, cnt3]

print(cnt2, cnt3)