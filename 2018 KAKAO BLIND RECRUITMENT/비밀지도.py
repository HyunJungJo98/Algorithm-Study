n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

def binary(x) :
    if len(bin(x)[2:]) < n :
        return '0'*(n-len(bin(x)[2:]))+bin(x)[2:]
    else : return bin(x)[2:]

a = list(map(binary, arr1))
b = list(map(binary, arr2))

print(a)
print(b)

result = []

for i in range(n) :
    a1 = a[i]
    a2 = b[i]
    string = ""
    for j in range(n) :
        if a1[j] == '1' or a2[j] == '1' :
            string += '#'
        else :
            string += ' '
    result.append(string)

print(result)