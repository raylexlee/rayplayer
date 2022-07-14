#!/usr/bin/env bash
touch songs.js
echo const Songs = [ > songs.js
 find . -type f -print | sed -e '1 d' -e 's#\s#%20#g' -e 's#.*#"\0",#' >> songs.js
