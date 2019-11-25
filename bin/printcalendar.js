const fs = require("fs");
const readline = require("readline");
var PdfPrinter = require('pdfmake');
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
  var images = []
  files = fs.readdirSync("qrcodes", function(err, files) {
    if (err) {
      return console.log("Unable to find qrcode directory")
    }
  });

  files.forEach(function(file) {
    images.push({ image: "qrcodes/" + file })
  });

  return images;
}

function readCmds() {
  var cmds = []

  files = fs.readdirSync("days", function(err, files) {
    if (err) {
      return console.log("Unable to find dasys directory")
    }
  });

  files.forEach(function(file) {
    lines = fs.readFileSync("days/" + file, "utf-8");
    cmd = lines.split(/\r?\n/)[0]

    cmds.push(cmd);
  });

  return cmds;
}
