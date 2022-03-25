from string import ascii_uppercase

msg = "ABABABABABABABAB"

answer = []
dic = {}

for i in range(26):
    dic[chr(65+i)] = i+1

w, c = 0, 0
while True:
    c += 1
    if c == len(msg):
        answer.append(dic[msg[w:c]])
        break
    if msg[w:c+1] not in dic:
        dic[msg[w:c+1]] = len(dic) + 1
        answer.append(dic[msg[w:c]])
        w = c

# alpha = list(ascii_uppercase)

# head = 0

# answer = []
# string = ""
# while head < len(msg):
#     string = msg[head]
#     prev_string = ""
#     while string in alpha and head < len(msg) - 1:
#         prev_string = string
#         head += 1
#         string += msg[head]
#         print(head)
#         print("string : ", string)
#     print(prev_string)

#     if prev_string == "":
#         answer.append(alpha.index(string)+1)
#         break
#     else:
#         answer.append(alpha.index(prev_string)+1)
#         alpha.append(string)

# print(answer)
