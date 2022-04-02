participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]

participant.sort()
completion.sort()

result = ''

for i in range(len(completion)) :
    if participant[i] != completion[i] :
        result=participant[i]
        break
if result == '' :
    result = participant[len(participant) - 1]
print(result)