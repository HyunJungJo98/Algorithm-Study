files = ["O00321", "O49qcGPHuRLR5FEfoO00321"]

dic = {}
result = []

for i in range(len(files)):
    start_num = 0
    end_num = 0
    for j in range(len(files[i])):
        if files[i][j].isnumeric():
            start_num = j
            break
    for j in range(start_num, len(files[i])):
        if not files[i][j].isnumeric():
            end_num = j
            break
    print(end_num)
    if end_num == 0:
        result.append(
            [files[i][:start_num], files[i][start_num:], i])
    else:
        result.append(
            [files[i][:start_num], files[i][start_num:end_num], i])


result.sort(key=lambda x: (x[0].upper(), int(x[1])))
answer = []
for i in range(len(result)):
    answer.append(files[result[i][2]])
