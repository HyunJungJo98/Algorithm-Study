new_id = "=.="

new_id = new_id.lower()
id = ""
for i in range(len(new_id)):
    if new_id[i].isalnum() or new_id[i] == '-' or new_id[i] == '_' or new_id[i] == '.':
        id += new_id[i]

while id.count('..') != 0:
    id = id.replace('..', '.')

new_id = id


if new_id[0] == '.':
    if len(new_id) == 1:
        new_id = 'a'
    else:
        new_id = new_id[1:]

if new_id[-1] == '.':
    new_id = new_id[:-1]

if new_id == '':
    new_id = 'a'

if len(new_id) >= 16:
    new_id = new_id[:15]

if new_id[-1] == '.':
    new_id = new_id[:-1]

if len(new_id) <= 2:
    while len(new_id) != 3:
        new_id += new_id[-1]

print(new_id)
