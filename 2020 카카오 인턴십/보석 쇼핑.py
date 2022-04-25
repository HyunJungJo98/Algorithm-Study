gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]

gems_list = len(set(gems))

start = 0
end = 0
min_length = 100000
result = [0, 0]
dic = {gems[0]: 1, }

# 처음에는 set(gems[start:end])의 길이로 배교했으나
# 시간 복잡도가 O((end-start)^2)가 되기 때문에
# 사전에 넣어 그 길이를 비교해 O(1)로 만들어줌
while end <= len(gems):
    if len(dic) == gems_list:
        if min_length > end-start:
            result[0] = start
            result[1] = end
            min_length = end - start
        if dic[gems[start]] == 1:
            del dic[gems[start]]
        else:
            dic[gems[start]] -= 1
        start += 1

    else:
        end += 1
        if end == len(gems):
            break
        dic[gems[end]] = dic.get(gems[end], 0) + 1

result[0] += 1
result[1] += 1
print(result)
