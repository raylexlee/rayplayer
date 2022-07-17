#!/usr/bin/env bash
touch songs.js
echo const Songs = [ > songs.js
find \( -name *.mp3 -or -name *.ogg \) -print | sed 's#.*#"\0",#' >> songs.js
echo ]\; >> songs.js
