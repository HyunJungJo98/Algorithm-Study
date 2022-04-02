clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]

d = {}

for i in range(len(clothes)) :
    if clothes[i][1] not in d :
        d[clothes[i][1]] = 1
    else :
        d[clothes[i][1]] += 1

result = 1
for value in d.values() :
    result = result*(value+1)

print(result-1)