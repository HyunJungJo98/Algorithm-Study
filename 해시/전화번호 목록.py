
phone_book = ["123","456","789"]

result = True

# for i in range(len(phone_book)) :
#     for j in range(len(phone_book)) :
#         if i==j :
#             continue
#         elif phone_book[j][:len(phone_book[i])] == phone_book[i] :
#             result = False
#             break
#     if result == False :
#         break

# print(result)

# d = {}
# phone_book.sort(key=lambda x : -len(x))
# d[phone_book[0]] = []
# print(d)

# for i in range(len(phone_book)-1, 0, -1) :
#     for key in d :
#         print(key)
#         if key[:len(phone_book[i])] == phone_book[i] :
#             result=False
#             break
#     if result==False :
#         break

# print(result)

##### 문자열 포함 등 문자열과 관련한 정렬이 나오면 일단 배열을 먼저 정렬해보자...#####

phone_book.sort(key=lambda x : (x, len(x)))

for i in range(len(phone_book)-1) :
    if phone_book[i] in phone_book[i+1][:len(phone_book[i])] :
        result = False
    if result == False :
        break
print(result)