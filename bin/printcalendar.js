const fs = require("fs");
var PdfPrinter = require('pdfmake');
var images = []
var fonts = {
  Courier: {
    normal: "Courier"
  }
}
var printer = new PdfPrinter(fonts);

images = readImages();
cmds = readCmds();

body = [
  [
    "Day",
    "QR code",
    "Command"
  ]
]

for(i=0; i<24; i++) {
  body.push(
    [
      (i+1).toString(),
      images[i],
      cmds[i]
    ]
  );
}

console.log(body)

var docDefinition = {
  content: [
    "vimcalendar",
    {
      layout: "lightHorizontalLines",
      table: {
        headerRows: 1,
        widths: [ "*", "*", "*" ],
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

function readImages() {
  files = fs.readdirSync("qrcodes", function(err, files) {
    if (err) {
      return console.log("Unable to find qrcode directory")
    }
  });

  files.forEach(function(file) {
    console.log("qrcodes/" + file);
    images.push({ image: "qrcodes/" + file })
  });

  return images;
}

function readCmds() {
  cmds = []
  for(i=0; i<24; i++) {
    cmds.push("cmd")
  }
  return cmds;
}
