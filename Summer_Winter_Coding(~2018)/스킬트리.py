skill = "CBD"
skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]

# result = [True] * len(skill_trees)
# for i in range(len(skill_trees)) :
#     num = 0
#     print("-----")
#     for j in range(len(skill)) :
#         for k in range(len(skill_trees[i])) :
#             if skill[j] == skill_trees[i][k] :
#                 print(num)
#                 if num > k or num==-1 :
#                     result[i] = False
#                     break
#                 else :
#                     num = k
#         if num==0 and j != 0:
#             num = -1

result = [True] * len(skill_trees)
for i in range(len(skill_trees)) :
    num = 0
    print("-----")
    for j in range(len(skill)) :
        print(num)
        if skill[j] in skill_trees[i] :
            if num == -1 or num > skill_trees[i].index(skill[j]):
                result[i] = False
                break
            else :
                num=skill_trees[i].index(skill[j])
        else :
            num = -1

print(result)