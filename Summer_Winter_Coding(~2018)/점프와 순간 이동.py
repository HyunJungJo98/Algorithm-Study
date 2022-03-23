n = 5000

# result = 0
# def dfs(n) :
#     global result
#     print(n)
#     if n < 3 :
#         print(dp[n])
#         result = dp[n]
#         return dp[n]
#     else :
#         if n%2 == 0 :
#             dfs(n//2)
#         else :
#             dfs(n-1)
#             result += 1
# dfs(N)

# result = 1

# for i in range(n, 2) :
#     print(i)
#     if i < 3 :
#         result = 1
#     else :
#         if i%2==0 :
#             i=i%2
#         else :
#             i=i-1
#             result += 1

result = 0 
while n>0 :
    if n%2 == 1 :
        result += 1
    n = n//2

print(result)