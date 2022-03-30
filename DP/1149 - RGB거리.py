import sys
read = sys.stdin.readline  

n = int(read())
house = []

for i in range(n) :
    house.append(list(map(int, read().split())))

for i in range(1, n) :
    house[i][0] = house[i][0] + min(house[i-1][1], house[i-1][2])
    house[i][1] = house[i][1] + min(house[i-1][0], house[i-1][2])
    house[i][2] = house[i][2] + min(house[i-1][0], house[i-1][1])

print(min(house[n-1][0], house[n-1][1], house[n-1][2]))