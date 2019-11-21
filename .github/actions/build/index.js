console.log("Build action runs")

var fs = require('fs');

var src = "days";
var dest = "public";

fs.readdir(src, function(err, files) {
  if (err) {
    return console.log("Unable to find directory" + dir)
  }
  files.forEach(function(file) {
    srcFile = src + "/" + file
    destFile = dest + "/" + file
    fs.copyFile(srcFile, destFile, (err) => {
      if(err) throw err;
      console.log(srcFile + " was copied to " + destFile)
    });
  });
});
