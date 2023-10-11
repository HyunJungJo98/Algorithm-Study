function solution(board) {
  let answer = board[0][0];
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        answer = board[i][j] > answer ? board[i][j] : answer;
      }
    }
  }

  return answer ** 2;
}

console.log(solution([[1, 0]]));

// 시간초과

// const isSquare = (i, j, n, board) => {
//     for (let k = i; k < i + n; k++) {
//       for (let l = j; l < j + n; l++) {
//         if (board[k][l] === 0) {
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   function solution(board) {
//     let n = Math.min(board[0].length, board.length);
//     let find = false;

//     while (n >= 0) {
//       for (let i = 0; i < board.length - n + 1; i++) {
//         for (let j = 0; j < board[0].length - n + 1; j++) {
//           if (isSquare(i, j, n, board)) {
//             find = true;
//             break;
//           }
//         }
//         if (find) {
//           break;
//         }
//       }
//       if (find) {
//         break;
//       }
//       n--;
//     }

//     return n ** 2;
//   }
