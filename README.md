# rayplayer
# Requirment
The rayplayer relies on a linuxi/macos terminal. Windows users need to have WSL or WSL2. Open the termainal and cd to the folder of songs. Run the following to create songs.js and download rayplayer.html
```
echo const Songs = [ > songs.js
find -name "*.mp3" -or -name "*.ogg" | sed 's#.*#"\0",#' >> songs.js
echo ] >> songs.js
wget https://raw.githubusercontent.com/raylexlee/rayplayer/main/rayplayer.html
```
# Procedurs
Using a modern browswe, open the rayplayer.html inside the folder.
![Sample Screenshot](sample.png)

