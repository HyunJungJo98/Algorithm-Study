w = 8
h = 12

area = w * h

end = 0

if w > h:
    end = h
else:
    end = w

a = 0
for i in range(1, end+1):
    if w % i == 0 and h % i == 0:
        if i > a:
            a = i
result = w + h - a
print(area - result)
