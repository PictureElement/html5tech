# Author: PictureElement (Marios Sofokleous)
# Date: 14.02.2017
# Description: Create and populate dist using the following optimization tools:
#   1. purifycss: Get only the used CSS
#   2. cssmin: Minify CSS
#   3. uglify: Compress all javascript files into one file and minify it.
#   4. critical: Extract & inline critical-path CSS from html files.
#   5. htmlmin: Minify all html files

#!/bin/bash

# step 1
mkdir dist

# step 2
mkdir dist/css
mkdir dist/js

# step 3
cp -r src/demos dist/
cp -r src/fonts dist/
cp -r src/images dist/
cp src/manifest.json dist/
cp src/sw.js dist/

# step 4
#npm install

# step 5
grunt clean

# step 6
grunt purifycss

# step 7
grunt cssmin

# step 8
grunt uglify

# step 9
grunt copy

# step  10
# multi-liner (first occurrence): perl -0pi -e "s/match/replacement/" filename
# multi-liner (all occurrences): perl -0pi -e "s/match/replacement/g" filename
# one-liner: perl -i -pe 's/match/replace/' filename
# escape / with \/
# 0: set line separator to null
perl -0pi -e "s/    <link rel='stylesheet' href='css\/bootstrap.min.css'.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n/    <link rel='stylesheet' href='css\/purestyles.min.css'>\n    <link rel='manifest' href='manifest.json'>\n    <script src='js\/output.min.js' defer><\/script>\n/" dist/*.html

# step 11
for((c=0;c<12;c++))
do
  grunt critical:t$c
  sleep 5
done

# step 12
# g: replace all occurrences
perl -0pi -e "s/css\/purestyles.min.css/\/html5tech\/css\/purestyles.min.css/g" dist/*.html
perl -0pi -e "s/manifest.json/\/html5tech\/manifest.json/" dist/*.html
perl -0pi -e "s/js\/output.min.js/\/html5tech\/js\/output.min.js/" dist/*.html

# step 13
grunt htmlmin

# step 14
perl -0pi -e 's/push("css\/prettify.css")/push("\/html5tech\/css\/purestyles.min.css")/g' dist/js/output.min.js
perl -0pi -e 's/.\/sw.js/\/html5tech\/sw.js/g' dist/js/output.min.js

# step 15
perl -0pi -e 's/..\/dist\/fonts/\/html5tech\/fonts/g' dist/*.html

#step 16
perl -0pi -e 's/..\/js\/jquery.min.js/\/html5tech\/js\/output.min.js/' demos/*.html