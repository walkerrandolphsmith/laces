build () {
  rm -rf ./packages/$1/dist && npx babel ./packages/$1/ --out-dir ./packages/$1/dist --ignore test.js,package.json,node_modules && ./node_modules/.bin/uglifyjs ./packages/$1/dist/index.js -o ./packages/$1/dist/index.js
}