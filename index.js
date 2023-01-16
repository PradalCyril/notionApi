import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { getPages } from './services/getPages.js';
import { downloadFromDbUploadToNotion } from './services/downloadFromDbUploadToNotion/index.js';
import { createFilters } from './services/createFilters.js';

const port = process.argv.slice(2)[0] || 8080;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.post('/blablablo', async (req, res) => {
  const data = req.body;
  if (!data) {
    res.statusMessage = "Url content was not defined";
    res.sendStatus(400);
  }
  downloadFromDbUploadToNotion(data)
  res.statusMessage = "Uploading..";
  res.send("Uploading..");
})

app.get('/getAllPokemons', async (req, res) => {
  const pages = await getPages();
  res.json(pages);
})

app.post('/getPokemons', async (req, res) => {
  const { filters, language } = req.body;
  if(!filters || !language) return res.sendStatus(500);
  const formatedFilters = createFilters(filters)
  const pages = await getPages(formatedFilters, language, filters);
  console.log("🚀 ~ file: index.js:36 ~ app.post ~ pages", JSON.stringify(pages, null, 2))
  fs.writeFileSync( "monsterList.json", JSON.stringify(pages, null, 2))
  res.json(pages);
})

console.log(`Email service listening on port ${port}`);
app.listen(port);