from collections import deque

cacheSize = 2
cities = ["Jeju", "Pangyo", "NewYork", "newyork"]
cities = [i.upper() for i in cities]
print(cities)

time = 0

if cacheSize == 0:
    time = len(cities) * 5
    exit()

cache = deque()

for i in range(len(cities)):
    print(list(cache))
    # 캐시에 없는 데이터가 들어온 경우
    if cities[i] not in cache:
        # 캐시에 빈 공간이 있는 경우
        if len(cache) < cacheSize:
            cache.append(cities[i])
            time += 5
        # 캐시가 가득 차있는 경우
        else:
            cache.popleft()
            cache.append(cities[i])
            time += 5
    # 캐시에 이미 존재하는 데이터가 들어온 경우
    else:
        idx = cache.index(cities[i])
        del cache[idx]
        cache.append(cities[i])
        time += 1

print(time)

# LRU 알고리즘
# 새로운 데이터가 들어온 경우
# 1. 캐시에 빈 공간이 있을 경우 : 캐시에 넣어줌
# 2. 캐시가 가득 차있는 경우 : 오래된 데이터를 제거하고 넣어줌
# 캐시에 이미 존재하는 데이터가 들어온 경우
# 1. 해당 데이터를 꺼낸 뒤 가장 최근 데이터 위치로 보내주기
