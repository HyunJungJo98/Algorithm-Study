const dfs = (dict, keys, l, start, return_set, arr) => {
    if (arr.length === l) {
        arr.sort((a, b) => a-b);
        return_set.add(arr.join(''))
        return;
    } else {
        for (let i = start; i<l; i++) {
            for(let j = 0; j<dict[keys[i]].length; j++){
                //console.log("현재:", dict[keys[i]][j]);
                if (!arr.includes(dict[keys[i]][j])) {
                    arr.push(dict[keys[i]][j]);
                    //console.log(arr);
                    dfs(dict, keys, l, start+1, return_set, arr);
                    arr.pop();
                }
            }
        }
    }

    return return_set
}

function solution(user_id, banned_id) {
    let answer = 0;

    let dict = {}

    for (let i = 0; i<banned_id.length; i++) {
        dict[banned_id[i]] = []
    }

    for (let i = 0; i<banned_id.length; i++) {
        for (let j = 0; j<user_id.length; j++) {
            result = true;
            if (user_id[j].length !== banned_id[i].length) {
                continue
            } else {
                for (let k = 0; k<user_id[j].length; k++) {
                    if (user_id[j][k] === banned_id[i][k] || banned_id[i][k] === "*") {
                        continue
                    }
                    else {
                        result = false;
                        break;
                    }
                }
                if (result) {
                    dict[banned_id[i]].push(user_id[j]);
                }
            }
        }
    }

    console.log(dict);

    

    const a = dfs(dict, Object.keys(dict), Object.keys(dict).length, 0, new Set(), new Array());
    answer = a.size;
    return answer;
}

const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
const banned_id = ["*rodo", "*rodo", "******"]
console.log(solution(user_id, banned_id));