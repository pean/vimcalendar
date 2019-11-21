const fs = require("fs");
const Hashids = require('hashids/cjs')
var QRCode = require('qrcode')

var src = "days";
var dest = "public";
var hashids = new Hashids("merrychristmas")

var baseurl = "https://vimcalendar.s3.eu-north-1.amazonaws.com/";
var qrcodedir = "qrcodes";

fs.readdir(src, function(err, files) {
  if (err) {
    return console.log("Unable to find directory" + dir)
  }
  files.forEach(function(file) {
    srcFile = src + "/" + file
    day = file.split(".")[0]

    destfilename = hashids.encode(day) + ".txt"; 
    destFile = dest + "/" + destfilename;

    qrFile = qrcodedir + "/" + day + ".png"
    fullURL = baseurl + destfilename
    QRCode.toFile(qrFile, fullURL)
    console.log("Generated QR code for " + srcFile + " to url " + fullURL)
  });
});

