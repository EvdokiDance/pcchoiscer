import express from 'express';
import cors from 'cors';
// import {videocards, processors, moutherboards, cases, hdd, ssd, power, coolers, ram} from './parserYM/pcComponents/index.js'
import hardwares from './parserYM/pcComponents/index.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Замените на адрес вашего React-приложения
  }));
  
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});

  app.get('/api/:hardware', (req, res) => {
 
    console.log('server: ', req.params.hardware)
    res.send(hardwares[req.params.hardware]);
  });



app.use((req, res) => {
    res.status(404).json({ error: 'FASFSAFSASFF' });
});