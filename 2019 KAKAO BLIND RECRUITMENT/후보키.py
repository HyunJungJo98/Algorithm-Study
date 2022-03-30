from itertools import combinations

relation = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], [
    "400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]

row = len(relation)
col = len(relation[0])

# 모든 속성의 조합
combi = []
for i in range(1, col+1):
    combi.extend(combinations(range(col), i))
print(combi)
# 후보키가 되는 속성 조합 붙이기
unique = []
# 속성 조합 한 개씩
for i in combi:
    tmp = []
    # 한 줄
    for item in relation:
        # 해당 속성 조합에 따라 실제 값 붙이기
        a = []
        for att in i:
            a.append(item[att])
        tmp.append(tuple(a))
    print(tmp)
    # 유일성 만족하면
    # 중복이 하나도 없기 때문에 집합으로 만들어도 개수가 row와 같음
    if len(set(tmp)) == row:
        put = True

        for x in unique:
            # x가 i의 부분집합이면
            # 최소성을 만족하지 못하므로 False 만들고 break
            if set(x).issubset(set(i)):
                put = False
                break

        # 후보키의 조건이 되면 속성 조합을 unique에 붙이기
        if put:
            unique.append(i)

print(len(unique))

# def dfs(ck, arr2, length, start):
#     global result
#     global arr3

#     print('arr3 : ', arr3)

#     if len(arr2) == length:
#         if len(list(zip(*arr2))) == len(set(zip(*arr2))):
#             a = sum(arr2, [])
#             b = ''.join(a)

#             if arr3 not in b:
#                 print("TRUE", b)
#                 result += 1
#             arr3 = b
#         return

#     for i in range(start, len(ck)):
#         arr2.append(arr[ck[i]])
#         dfs(ck, arr2, length, start+1)
#         arr2.pop()
#         start += 1


# arr = [[] for _ in range(len(relation[0]))]
# pk = [1]*len(relation[0])

# for i in range(len(relation)):
#     for j in range(len(relation[i])):
#         if relation[i][j] in arr[j]:
#             pk[j] = 0
#         arr[j].append(relation[i][j])

# print(arr)
# print(pk)

# result = pk.count(1)

# ck = []

# for i in range(len(pk)):
#     if pk[i] == 0:
#         ck.append(i)

# print(ck)

# arr3 = " "
# for i in range(2, len(ck)+1):
#     arr2 = []
#     dfs(ck, arr2, i, 0)

# print(result)
