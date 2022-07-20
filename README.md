# rayplayer
# Installation
Open a linux/macos/wsl terminal at your folder. Create songs.js by running
```
echo const Songs = [ > songs.js
find . -name "*.mp3" -or -name "*.ogg" | sed 's#\(.*\)#"\1",#' >> songs.js
echo ] >> songs.js
```
and download rayplayer.html
```
wget https://raw.githubusercontent.com/raylexlee/rayplayer/main/rayplayer.html
```
For Window users not having WSL installed, open the powershell at the folder.
```
$data = (dir -recurse -ea 0 | % FullName | sls "\.(mp3|ogg)$")
"const Songs = [" > songs.js
$data | ForEach-Object -Process {"$PSItem".Replace($pwd,"'.").Replace("\","/").Replace("mp3","mp3',").Replace("ogg","ogg',")} >> songs.js
"]" >> songs.js
```
and download rayplayer.html
```
Invoke-WebRequest -Uri https://raw.githubusercontent.com/raylexlee/rayplayer/main/rayplayer.html -OutFile rayplayer.html
```
# Procedure
Using a modern browswe, open the rayplayer.html inside the folder.
# Screenshots
Microsoft Edge on Windows 11 Home
![Sample Screenshot](sample.png)
Safari on Mac OSX Sierra
![Sample Screenshot](sample2.png)
