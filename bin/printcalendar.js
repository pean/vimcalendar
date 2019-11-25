const fs = require("fs");
var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter();
var images = []

files = fs.readdirSync("qrcodes", function(err, files) {
  if (err) {
    return console.log("Unable to find qrcode directory")
  }
});

files.forEach(function(file) {
  console.log("qrcodes/" + file);
  images.push({ image: "qrcodes/" + file })
});

var docDefinition = {
  content: images
}

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("docs/printcalendar.pdf"));
pdfDoc.end();
