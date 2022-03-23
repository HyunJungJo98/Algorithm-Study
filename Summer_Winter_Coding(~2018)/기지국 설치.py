n = 16
stations = [9]
w = 2

a = [0] * (n+1)
a[0] = 1
for i in range(len(stations)) :
    a[stations[i]] = 1
    if stations[i]+w < len(a) :
        a[stations[i]+1:stations[i]+w+1] = [1]*w
    else :
        a[stations[i]:] = [1]*(len(a)-stations[i])
    if stations[i]-1 >= 0 :
        a[stations[i]-w:stations[i]] = [1]*w
    else :
        a[:stations[i]] = [1]*stations[i]

print(a.count(0)//(w*2+1)+1)


# cnt = 0
# result = 0
# for i in range(1, n+1) :
#     if i == n and a[i] == 0:
#         result += (cnt // (w*2+1)) + 1
#     else :
#         if a[i] == 0 :
#             cnt += 1
#         elif a[i] == 1 :
#             if a[i-1] == 1 :
#                 continue
#             else :
#                 print(cnt)
#                 result += (cnt // (w*2+1)) + 1
#                 cnt = 0

# a = [0] *(n+1)
# a[0] = 1
# for i in range(len(stations)) :
#     a[stations[i]] = 1
# print(a)
# b = n - (w*2+1)*(a.count(0))
# print(b)
# print(b//(w*2+1)+1)


# for i in range(len(a)) :
#     if i+w < len(a) :
#         a[i+1:i+w+1] = [1]*w
#     else :
#         a[i+1:] = [1]*(len(a)-i)
#     if i-w>=0 :
#         a[i-w:i] = [1]*w
#     else :
#         a[:i] = [1]*(i)


# print(cnt)
