function solution(fees, records) {
    let answer = [];

    let dict = {}

    for(let i = 0; i<records.length; i++) {
        const [time, carnum, inout] = records[i].split(" ")
        const [hour, min] = time.split(":")

        const t = Number(hour)*60 + Number(min)

        if(carnum in dict) {
            dict[carnum].push(t)
        } else {
            dict[carnum] = [t]
        }
    }

    let result = []

    for(let key in dict) {
        if(dict[key].length%2 == 1) {
            dict[key].push(1439)
        }
        let total = 0
        for(let i = 0; i<dict[key].length; i++){
            if(i%2 == 0){
                total -= dict[key][i]
            }
            else {
                total += dict[key][i]
            }
        }
        console.log(total);
        if (total <= fees[0]) {
            result.push([key, fees[1]])
        } else {
            result.push([key, Math.ceil((total-fees[0])/fees[2]) * fees[3] + fees[1]])
        }
    }

    result.sort((a, b) => a[0]-b[0])

    for(let i = 0; i<result.length; i++) {
        answer.push(result[i][1])
    }
    return answer;
}

const fees = [180,5000,10,600]
const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
console.log(solution(fees, records));