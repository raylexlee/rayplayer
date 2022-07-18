echo const Songs = [ > songs.js
find -name "*.mp3" -or -name "*.ogg" | sed 's#.*#"\0",#' >> songs.js
echo ] >> songs.js
