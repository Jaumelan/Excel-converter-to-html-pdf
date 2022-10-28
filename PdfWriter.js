const pdf = require("html-pdf");

class PdfWriter {
  static write(filename, html) {
    pdf.create(html, {}).toFile(filename, (err) => {});
  }
}

module.exports = PdfWriter;