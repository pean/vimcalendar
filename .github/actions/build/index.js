console.log("build action started")

var fs = require("fs");
const Hashids = require('hashids/cjs')

var src = "days";
var dest = "public";
var hashids = new Hashids("merrychristmas")

fs.readdir(src, function(err, files) {
  if (err) {
    return console.log("Unable to find directory" + dir)
  }
  files.forEach(function(file) {
    srcFile = src + "/" + file
    day = hashids.encode(file.split(".")[0])
    destFile = dest + "/" + day + ".txt";
    fs.copyFile(srcFile, destFile, (err) => {
      if(err) throw err;
      console.log(srcFile + " was copied to " + destFile)
    });
  });
});

console.log("build action done")
