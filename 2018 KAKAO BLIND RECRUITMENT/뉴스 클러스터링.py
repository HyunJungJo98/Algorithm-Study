from collections import Counter

str1 = "aa1+aa2"
str2 = "AAAA12"

str1 = str1.upper()
str2 = str2.upper()

print(str1, str2)

str1_list = []
str2_list = []

def div(x, str_list) :
    s = ""
    for i in range(len(x)-1) :
        if x[i].isalpha() and x[i+1].isalpha() :
            str_list.append(x[i]+x[i+1])
        # s = x[i] + x[i+1]
        # if not s.isalnum() or s.isnumeric():
        #     continue
        # str_list.append(s)

# def J(A, B) :
#     a = []
#     u = []
#     for i in range(len(A)) :
        
#         #교집합 개수 구하기
#         if A[i] in A and A[i] in B and A[i]:
#             if A.count(A[i]) < B.count(A[i]):
#                 a.append(A[i])
#                 u.append(A[i])
#             else :
#                 a.append(A[i])
#                 u.append(A[i])
#         #합집합 개수 구하기
#         elif A[i] in A and A[i] not in B :
#             u.append(A[i])
#         if B[i] in B and B[i] not in A :
#             u.append(B[i])
    
#     print(a)
#     print(u)

#     return len(a)/len(u)*65536

div(str1, str1_list)
div(str2, str2_list)

print(str1_list, str2_list)

#Counter : 각 요소의 개수를 요소:개수의 사전 형태로 만들어줌
Counter1 = Counter(str1_list)
Counter2 = Counter(str2_list)

print(Counter1)

print(list(Counter1.elements()))
print(list(Counter2.elements()))

#다중집합도 교집합, 합집합 가능
inter = list((Counter1 & Counter2).elements())
union = list((Counter1 | Counter2).elements())

print(inter, union)

if len(union) == 0 and len(inter) == 0 :
    print(65536)
else :
    print(int(len(inter)/len(union)*65536))