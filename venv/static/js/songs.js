class Songs {
  constructor(name, artist, url) {
    this.name = name;
    this.artist = artist;
    this.url = url;
  }
}

const s1 = new Songs("Gravity", "EDEN", "../static/files/gravity.mp3");
const s2 = new Songs("Stay", "NoIdea", "../static/files/stay.mp3");
const s3 = new Songs(
  "Straigt Jacket",
  "Someone",
  "../static/files/straigthjacket.mp3"
);
const s4 = new Songs("wakeup", "EDEN", "../static/files/wakeup.mp3");
const s5 = new Songs("Emily", "LOL", "../static/files/emily.mp3");
const s6 = new Songs(
  "Bensound",
  "XD",
  "../static/files/bensound-betterdays.mp3"
);
const s7 = new Songs(
  "Waiting for Love",
  "Avicii",
  "../static/files/waitingforlove.mp3"
);

const songs = [];
songs.push(s1);
songs.push(s2);
songs.push(s3);
songs.push(s4);
songs.push(s5);
songs.push(s6);
songs.push(s7);

const visited = [];

while (visited.length != 6) {
  for (let i = 0; i < songs.length; i++) {
    let number = Math.floor(Math.random() * songs.length);
    // console.log(number);
    if (visited.includes(songs[number])) continue;
    else visited.push(songs[number]);
  }
}

export default visited;
