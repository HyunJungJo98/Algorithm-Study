import sys
read = sys.stdin.readline

m, n = map(int, read().split())

dic = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
       6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero'}

result = []

for i in range(m, n+1):
    num = list(map(int, str(i)))
    string = ''
    for j in range(len(num)):
        string += dic[num[j]]
    result.append([i, string])

result.sort(key=lambda x: x[1])
cnt = 0
for i in range(len(result)):
    if cnt != 9:
        print(result[i][0], end=' ')
        cnt += 1
    else:
        print(result[i][0])
        cnt = 0
