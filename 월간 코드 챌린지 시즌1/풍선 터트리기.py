a = [-16,27,65,-2,58,-92,-71,-68,-61,-33]

answer = 2

if len(a) <= 2 :
    answer = len(a)

l_min = [a[0]]
r_min = [a[-1]]

for i in range(1, len(a)) :
    if a[i] < l_min[-1] :
        l_min.append(a[i])
    else :
        l_min.append(l_min[-1])
    if a[len(a)-i-1] < r_min[-1] :
        r_min.append(a[len(a)-i-1])
    else :
        r_min.append(r_min[-1])
r_min.reverse()

for i in range(1, len(a)-1) :
    if a[i] < l_min[i-1] or r_min[i+1] > a[i] :
        answer += 1