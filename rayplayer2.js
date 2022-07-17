let pos = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('songTitle');
function playNextSong() {
    pos = ( pos === (Songs.length - 1) )  ? 0 : (pos + 1);
    playSong(Shuffle[pos]);
}
audio.onended = playNextSong;
audio.onerror = function() {
  document.getElementById('idError').innerHTML += `${Songs[Shuffle[pos]]}<br>\n`;
  playNextSong();
}
const audioSource = id => `<source type="audio/${Songs[id].slice(-3)}" src="${encodeURI(Songs[id])}">
Sorry, your browser does not support HTML5 audio.`;
const optSong = id => `<option value="${id}">${Songs[Shuffle[id]]}`;
function playSong(id) {
  audio.innerHTML = audioSource(id);
  audio.load();
  audio.play();
  songTitle.innerHTML = `<p>${Songs[id]}</p>`;
  document.getElementById("mySong").value = pos;
}
function gotoSong() {
  const j = parseInt(document.getElementById("mySong").value);
  if (j == pos) return;
  pos = j;
  playSong(Shuffle[pos]);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const Shuffle = Songs.map((s, i) => i);
shuffleArray(Shuffle);
document.getElementById("mySong").innerHTML = `${Songs.map((s, i) => optSong(i)).join('\n')}`;
playSong(Shuffle[pos]);

