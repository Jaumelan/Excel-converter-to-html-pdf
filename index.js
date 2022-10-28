const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const FileWriter = require("./FileWriter");
const PdfWriter = require("./PdfWriter");

const leitor = new Reader();
const escritor = new FileWriter();

async function main() {
  const dados = await leitor.read("./users.csv");
  const dadosProcessados = Processor.process(dados);
  const usuarios = new Table(dadosProcessados);
  const html = await HtmlParser.parse(usuarios);
  const random = Math.floor(Math.random() * 100 + 1);
  escritor.write(`file${random}.html`, html);
  PdfWriter.write(`file${random}.pdf`, html);
}

main();
