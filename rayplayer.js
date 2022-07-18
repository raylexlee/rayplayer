const Shuffle = Songs.map((s, i) => i);
let pos = 0;
document.getElementById('myShuffleplay').onchange = function() {
  if (this.checked) shuffleArray(Shuffle); 
  document.getElementById("mySong").innerHTML = `${Songs.map((s, i) => optSong(i)).join('\n')}`;
  pos = this.checked ? 0 : Shuffle[pos];
  playSong();
};
const audio = document.getElementById('audio');
const songTitle = document.getElementById('songTitle');
function playNextSong() {
    pos = ( pos === (Songs.length - 1) )  ? 0 : (pos + 1);
    playSong();
}
audio.onended = playNextSong;
function audioSource() { 
  const id = document.getElementById('myShuffleplay').checked ? Shuffle[pos] : pos;
  return `<source type="audio/${Songs[id].slice(-3)}" src="${encodeURI(Songs[id])}">
Sorry, your browser does not support HTML5 audio.`;
};
const optSong = id => {
  const songId = document.getElementById('myShuffleplay').checked ? Shuffle[id] : id;
  return `<option value="${id}">${Songs[songId]}`;
  };
function playSong() {
  const id = document.getElementById('myShuffleplay').checked ? Shuffle[pos] : pos;
  audio.innerHTML = audioSource();
  audio.load();
  audio.play();
  songTitle.innerHTML = `<p>${Songs[id]}</p>`;
  document.getElementById("mySong").value = pos;
}
function gotoSong() {
  const j = parseInt(document.getElementById("mySong").value);
  if (j == pos) return;
  pos = j;
  playSong();
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
document.getElementById('myShuffleplay').onchange();
