// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1A
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(`Question 1`);
console.log(jokeJS1);

// 1B
p1.innerHTML = jokeJS1.setup;

// 1C
// p2.innerHTML = jokeJS1.punchline;
console.log(jokeJS1.punchline);



// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// 2A
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

 // 2B
 .then(res => {
    console.log(`Question 2`);
    console.log(res);
    const friendsJS2 = res.data;
    console.log(friendsJS2);
    // 2C
    p3.innerText = friendsJS2.character;
    p4.innerText = friendsJS2.quote;
  })
  // 2D
  .catch(err => {
    console.log(`Question 2 Failed`);
    console.log(err);
  });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4A
const baseURL = `https://api.tvmaze.com`;
const id = `38963`;
const endpoint = `/shows/${id}/episodebynumber?`;
const season = `2`;
const number = `8`;
const queryString = `season=${season}&number=${number}`;
const fullEndpoint = baseURL + endpoint + queryString;

// 4B
try {
    const episode = await axios.get(fullEndpoint);
    console.log(`Question 4`);
    console.log(episode);
    console.log(episode.data.name);
    p7.innerHTML = episode.data.name;
  } catch (err) {
    console.log(err);
  }
tvMazeFunc();
