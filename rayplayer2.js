let pos = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('songTitle');
audio.addEventListener('ended',function(e){
pos++;
pos = ( pos === Songs.length )  ? 0 : pos;
playSong(Shuffle[pos]);
});
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
  const j = document.getElementById("mySong").value;
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
playSong(Shuffle[pos]);
document.getElementById("mySong").innerHTML = `${Songs.map((s, i) => optSong(i)).join('\n')}`;

