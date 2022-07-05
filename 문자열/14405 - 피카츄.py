import sys
read = sys.stdin.readline

s = read().strip()

# stack = []
# for i in range(len(s)):
#     if not stack or (s[i] != 'i' and s[i] != 'a' and s[i] != 'u'):
#         stack.append(s[i])
#     else:
#         if s[i] == 'i' and stack[-1] == 'p':
#             stack.pop()
#         elif s[i] == 'a' and stack[-1] == 'k':
#             stack.pop()
#         elif len(stack) >= 2 and s[i] == 'u' and stack[-1] == 'h' and stack[-2] == 'c':
#             stack.pop()
#             stack.pop()

# if len(stack) != 0:
#     print('NO')
# else:
#     print('YES')

l = len(s)
idx = 0
result = True
while idx < l:
    if idx+1 < l and s[idx] == 'k' and s[idx+1] == 'a':
        idx += 2
        continue
    if idx+1 < l and s[idx] == 'p' and s[idx+1] == 'i':
        idx += 2
        continue
    if idx+2 < l and s[idx] == 'c' and s[idx+1] == 'h' and s[idx+2] == 'u':
        idx += 3
        continue
    else:
        result = False
        break

if result:
    print('YES')
else:
    print('NO')
