#numbers = [0, 0, 0, 0]
numbers = [3, 30, 34, 5, 9]
numbers_str = list(map(str, numbers))
#숫자는 1000이하, 3보다 30이 뒤에 와야 함
#303보다 330이 더 크기 때문
numbers_str.sort(key=lambda x : x*3, reverse=True)
print(str(int(''.join(numbers_str))))







# visited = [0] * len(numbers)
# string = []
# s = []
# def dfs() :
#     if len(string) == len(numbers) :
#         s.append(int(''.join(string)))
#         return
#     for i in range(len(numbers)) :
#         if visited[i] == 0 :
#             string.append(str(numbers[i]))
#             visited[i] = 1
#             dfs()
#             string.pop()
#             visited[i] = 0

# dfs()

# result = 0
# for i in range(len(s)) :
#     if int(s[i]) > int(result) :
#         result = s[i]

# print(str(max(s)))