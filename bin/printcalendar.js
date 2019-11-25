const fs = require("fs");
var PdfPrinter = require('pdfmake');
var images = []
var fonts = {
  Courier: {
    normal: "Courier"
  }
}
var printer = new PdfPrinter(fonts);

files = fs.readdirSync("qrcodes", function(err, files) {
  if (err) {
    return console.log("Unable to find qrcode directory")
  }
});

files.forEach(function(file) {
  console.log("qrcodes/" + file);
  images.push({ image: "qrcodes/" + file })
});

body = [
  [
    "Day",
    "QR code"
  ]
]
images.forEach(function(image, index) {
  body.push(
    [
      index.toString(),
      image,
    ]
  );
});

console.log(body)

var docDefinition = {
  content: [
    "vimcalendar",
    {
      layout: "lightHorizontalLines",
      table: {
        headerRows: 1,
        widths: [ "*", "*" ],
        body: body
      }
    }
  ],
  defaultStyle: {
    font: "Courier",
  }
}



var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("docs/printcalendar.pdf"));
pdfDoc.end();
