echo const Songs = [ > songs.js
find . -name "*.mp3" -or -name "*.ogg" | sed 's#\(.*\)#"\1",#' >> songs.js
echo ] >> songs.js
