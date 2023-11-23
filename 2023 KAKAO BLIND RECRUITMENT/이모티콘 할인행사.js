let answer = [0, 0];
const changeMax = (users, purchased) => {
  //   console.log(purchased);
  let plus = 0;
  let revenue = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i][1] <= purchased[i]) {
      plus++;
    } else {
      revenue += purchased[i];
    }
  }

  //   console.log(plus, revenue);

  if (answer[0] < plus) {
    answer = [plus, revenue];
  } else if (answer[0] === plus) {
    if (answer[1] < revenue) {
      answer = [plus, revenue];
    }
  }
};

const buyEmoticons = (users, dcPrice) => {
  //   console.log(dcPrice);
  const purchased = Array(users.length).fill(0);
  for (let i = 0; i < dcPrice.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if ((100 - users[j][0]) / 100 >= dcPrice[i].dc) {
        purchased[j] += dcPrice[i].price;
      }
    }
  }
  changeMax(users, purchased);
};

const decideDC = (dc, emoticons, dcPrice, start, users) => {
  if (dcPrice.length === emoticons.length) {
    buyEmoticons(users, dcPrice);
  }
  for (let i = start; i < emoticons.length; i++) {
    for (let j = 0; j < dc.length; j++) {
      dcPrice.push({ dc: dc[j], price: emoticons[i] * dc[j] });
      decideDC(dc, emoticons, dcPrice, i + 1, users);
      dcPrice.pop();
    }
  }
};

function solution(users, emoticons) {
  const dc = [0.6, 0.7, 0.8, 0.9];
  const dcPrice = [];

  decideDC(dc, emoticons, dcPrice, 0, users);

  return answer;
}

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
