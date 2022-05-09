function solution(s) {
    let answer = 0;
    let s1 = s;
    
    for (let j = 0; j < s1.length; j++){
        let stack = [];
        for(let i = 0; i<s1.length; i++) {
            if(stack.length === 0) {
                stack.push(s1[i]);
            } else {
                if (s1[i] === ']' && stack[stack.length-1] === '[') {
                    stack.pop()
                } else if (s1[i] === '}' && stack[stack.length-1] === '{') {
                    stack.pop();
                } else if (s1[i] === ')' && stack[stack.length-1] === '(') {
                    stack.pop();
                } else {
                    stack.push(s1[i])
                }
            }
        }

        console.log(stack);
    
        if (stack.length === 0) {
            answer+=1;
        }

        const a = s1[0];
        s1 = s1.slice(1) + a;
        console.log(s1);
    }

    return answer;
}

s = "[)(]"
console.log(solution(s));